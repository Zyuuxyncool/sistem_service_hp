import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Pelanggan\RiwayatServisController::index
* @see app/Http/Controllers/Pelanggan/RiwayatServisController.php:12
* @route '/pelanggan/riwayat-servis'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/pelanggan/riwayat-servis',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Pelanggan\RiwayatServisController::index
* @see app/Http/Controllers/Pelanggan/RiwayatServisController.php:12
* @route '/pelanggan/riwayat-servis'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Pelanggan\RiwayatServisController::index
* @see app/Http/Controllers/Pelanggan/RiwayatServisController.php:12
* @route '/pelanggan/riwayat-servis'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Pelanggan\RiwayatServisController::index
* @see app/Http/Controllers/Pelanggan/RiwayatServisController.php:12
* @route '/pelanggan/riwayat-servis'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Pelanggan\RiwayatServisController::index
* @see app/Http/Controllers/Pelanggan/RiwayatServisController.php:12
* @route '/pelanggan/riwayat-servis'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Pelanggan\RiwayatServisController::index
* @see app/Http/Controllers/Pelanggan/RiwayatServisController.php:12
* @route '/pelanggan/riwayat-servis'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Pelanggan\RiwayatServisController::index
* @see app/Http/Controllers/Pelanggan/RiwayatServisController.php:12
* @route '/pelanggan/riwayat-servis'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Pelanggan\RiwayatServisController::bayar
* @see app/Http/Controllers/Pelanggan/RiwayatServisController.php:52
* @route '/pelanggan/riwayat-servis/{id}/bayar'
*/
export const bayar = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bayar.url(args, options),
    method: 'post',
})

bayar.definition = {
    methods: ["post"],
    url: '/pelanggan/riwayat-servis/{id}/bayar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Pelanggan\RiwayatServisController::bayar
* @see app/Http/Controllers/Pelanggan/RiwayatServisController.php:52
* @route '/pelanggan/riwayat-servis/{id}/bayar'
*/
bayar.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return bayar.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Pelanggan\RiwayatServisController::bayar
* @see app/Http/Controllers/Pelanggan/RiwayatServisController.php:52
* @route '/pelanggan/riwayat-servis/{id}/bayar'
*/
bayar.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bayar.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Pelanggan\RiwayatServisController::bayar
* @see app/Http/Controllers/Pelanggan/RiwayatServisController.php:52
* @route '/pelanggan/riwayat-servis/{id}/bayar'
*/
const bayarForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bayar.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Pelanggan\RiwayatServisController::bayar
* @see app/Http/Controllers/Pelanggan/RiwayatServisController.php:52
* @route '/pelanggan/riwayat-servis/{id}/bayar'
*/
bayarForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bayar.url(args, options),
    method: 'post',
})

bayar.form = bayarForm

/**
* @see \App\Http\Controllers\Pelanggan\RiwayatServisController::cancel
* @see app/Http/Controllers/Pelanggan/RiwayatServisController.php:78
* @route '/pelanggan/riwayat-servis/{id}/cancel'
*/
export const cancel = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

cancel.definition = {
    methods: ["post"],
    url: '/pelanggan/riwayat-servis/{id}/cancel',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Pelanggan\RiwayatServisController::cancel
* @see app/Http/Controllers/Pelanggan/RiwayatServisController.php:78
* @route '/pelanggan/riwayat-servis/{id}/cancel'
*/
cancel.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return cancel.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Pelanggan\RiwayatServisController::cancel
* @see app/Http/Controllers/Pelanggan/RiwayatServisController.php:78
* @route '/pelanggan/riwayat-servis/{id}/cancel'
*/
cancel.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Pelanggan\RiwayatServisController::cancel
* @see app/Http/Controllers/Pelanggan/RiwayatServisController.php:78
* @route '/pelanggan/riwayat-servis/{id}/cancel'
*/
const cancelForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Pelanggan\RiwayatServisController::cancel
* @see app/Http/Controllers/Pelanggan/RiwayatServisController.php:78
* @route '/pelanggan/riwayat-servis/{id}/cancel'
*/
cancelForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, options),
    method: 'post',
})

cancel.form = cancelForm

const riwayat_servis = {
    index: Object.assign(index, index),
    bayar: Object.assign(bayar, bayar),
    cancel: Object.assign(cancel, cancel),
}

export default riwayat_servis