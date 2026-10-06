<script setup lang="ts">
import { ref, computed } from 'vue'
import { Check, ChevronsUpDown } from '@lucide/vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const props = defineProps<{
  options: any[];
  modelValue: any;
  label: string;
  reduce?: (option: any) => any;
  placeholder?: string;
}>()

const emit = defineEmits(['update:modelValue'])

const open = ref(false)
const searchQuery = ref('')

const resolvedReduce = props.reduce || ((opt) => opt.id)

const displayValue = computed(() => {
  const selected = props.options.find((opt) => resolvedReduce(opt) === props.modelValue)
  return selected ? selected[props.label] : props.placeholder || 'Select option...'
})

const filteredOptions = computed(() => {
  if (!searchQuery.value) return props.options
  const lower = searchQuery.value.toLowerCase()
  return props.options.filter((opt) => String(opt[props.label]).toLowerCase().includes(lower))
})

const selectOption = (opt: any) => {
  emit('update:modelValue', resolvedReduce(opt))
  open.value = false
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-full justify-between"
      >
        {{ displayValue }}
        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[300px] p-0" align="start">
      <Command>
        <CommandInput 
          class="h-9" 
          :placeholder="`Search ${placeholder || 'option'}...`" 
          v-model="searchQuery" 
        />
        <CommandEmpty>No option found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="option in filteredOptions"
              :key="resolvedReduce(option)"
              :value="String(option[label])"
              @select="selectOption(option)"
            >
              {{ option[label] }}
              <Check
                :class="cn(
                  'ml-auto h-4 w-4',
                  modelValue === resolvedReduce(option) ? 'opacity-100' : 'opacity-0'
                )"
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
