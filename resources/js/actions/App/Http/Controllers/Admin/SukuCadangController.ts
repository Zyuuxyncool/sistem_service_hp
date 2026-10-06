import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\SukuCadangController::index
* @see app/Http/Controllers/Admin/SukuCadangController.php:19
* @route '/admin/suku_cadang'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/suku_cadang',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::index
* @see app/Http/Controllers/Admin/SukuCadangController.php:19
* @route '/admin/suku_cadang'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::index
* @see app/Http/Controllers/Admin/SukuCadangController.php:19
* @route '/admin/suku_cadang'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::index
* @see app/Http/Controllers/Admin/SukuCadangController.php:19
* @route '/admin/suku_cadang'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::index
* @see app/Http/Controllers/Admin/SukuCadangController.php:19
* @route '/admin/suku_cadang'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::index
* @see app/Http/Controllers/Admin/SukuCadangController.php:19
* @route '/admin/suku_cadang'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::index
* @see app/Http/Controllers/Admin/SukuCadangController.php:19
* @route '/admin/suku_cadang'
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
* @see \App\Http\Controllers\Admin\SukuCadangController::create
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/suku_cadang/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::create
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::create
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::create
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::create
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::create
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::create
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::store
* @see app/Http/Controllers/Admin/SukuCadangController.php:27
* @route '/admin/suku_cadang'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/suku_cadang',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::store
* @see app/Http/Controllers/Admin/SukuCadangController.php:27
* @route '/admin/suku_cadang'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::store
* @see app/Http/Controllers/Admin/SukuCadangController.php:27
* @route '/admin/suku_cadang'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::store
* @see app/Http/Controllers/Admin/SukuCadangController.php:27
* @route '/admin/suku_cadang'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::store
* @see app/Http/Controllers/Admin/SukuCadangController.php:27
* @route '/admin/suku_cadang'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::show
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/{suku_cadang}'
*/
export const show = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/suku_cadang/{suku_cadang}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::show
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/{suku_cadang}'
*/
show.url = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { suku_cadang: args }
    }

    if (Array.isArray(args)) {
        args = {
            suku_cadang: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        suku_cadang: args.suku_cadang,
    }

    return show.definition.url
            .replace('{suku_cadang}', parsedArgs.suku_cadang.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::show
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/{suku_cadang}'
*/
show.get = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::show
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/{suku_cadang}'
*/
show.head = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::show
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/{suku_cadang}'
*/
const showForm = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::show
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/{suku_cadang}'
*/
showForm.get = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::show
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/{suku_cadang}'
*/
showForm.head = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::edit
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/{suku_cadang}/edit'
*/
export const edit = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/suku_cadang/{suku_cadang}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::edit
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/{suku_cadang}/edit'
*/
edit.url = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { suku_cadang: args }
    }

    if (Array.isArray(args)) {
        args = {
            suku_cadang: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        suku_cadang: args.suku_cadang,
    }

    return edit.definition.url
            .replace('{suku_cadang}', parsedArgs.suku_cadang.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::edit
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/{suku_cadang}/edit'
*/
edit.get = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::edit
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/{suku_cadang}/edit'
*/
edit.head = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::edit
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/{suku_cadang}/edit'
*/
const editForm = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::edit
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/{suku_cadang}/edit'
*/
editForm.get = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::edit
* @see app/Http/Controllers/Admin/SukuCadangController.php:0
* @route '/admin/suku_cadang/{suku_cadang}/edit'
*/
editForm.head = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::update
* @see app/Http/Controllers/Admin/SukuCadangController.php:33
* @route '/admin/suku_cadang/{suku_cadang}'
*/
export const update = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/suku_cadang/{suku_cadang}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::update
* @see app/Http/Controllers/Admin/SukuCadangController.php:33
* @route '/admin/suku_cadang/{suku_cadang}'
*/
update.url = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { suku_cadang: args }
    }

    if (Array.isArray(args)) {
        args = {
            suku_cadang: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        suku_cadang: args.suku_cadang,
    }

    return update.definition.url
            .replace('{suku_cadang}', parsedArgs.suku_cadang.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::update
* @see app/Http/Controllers/Admin/SukuCadangController.php:33
* @route '/admin/suku_cadang/{suku_cadang}'
*/
update.put = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::update
* @see app/Http/Controllers/Admin/SukuCadangController.php:33
* @route '/admin/suku_cadang/{suku_cadang}'
*/
update.patch = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::update
* @see app/Http/Controllers/Admin/SukuCadangController.php:33
* @route '/admin/suku_cadang/{suku_cadang}'
*/
const updateForm = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::update
* @see app/Http/Controllers/Admin/SukuCadangController.php:33
* @route '/admin/suku_cadang/{suku_cadang}'
*/
updateForm.put = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::update
* @see app/Http/Controllers/Admin/SukuCadangController.php:33
* @route '/admin/suku_cadang/{suku_cadang}'
*/
updateForm.patch = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::destroy
* @see app/Http/Controllers/Admin/SukuCadangController.php:39
* @route '/admin/suku_cadang/{suku_cadang}'
*/
export const destroy = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/suku_cadang/{suku_cadang}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::destroy
* @see app/Http/Controllers/Admin/SukuCadangController.php:39
* @route '/admin/suku_cadang/{suku_cadang}'
*/
destroy.url = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { suku_cadang: args }
    }

    if (Array.isArray(args)) {
        args = {
            suku_cadang: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        suku_cadang: args.suku_cadang,
    }

    return destroy.definition.url
            .replace('{suku_cadang}', parsedArgs.suku_cadang.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::destroy
* @see app/Http/Controllers/Admin/SukuCadangController.php:39
* @route '/admin/suku_cadang/{suku_cadang}'
*/
destroy.delete = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::destroy
* @see app/Http/Controllers/Admin/SukuCadangController.php:39
* @route '/admin/suku_cadang/{suku_cadang}'
*/
const destroyForm = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SukuCadangController::destroy
* @see app/Http/Controllers/Admin/SukuCadangController.php:39
* @route '/admin/suku_cadang/{suku_cadang}'
*/
destroyForm.delete = (args: { suku_cadang: string | number } | [suku_cadang: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const SukuCadangController = { index, create, store, show, edit, update, destroy }

export default SukuCadangController