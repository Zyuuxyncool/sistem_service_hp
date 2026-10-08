import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::index
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:13
* @route '/admin/metode_pembayaran'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/metode_pembayaran',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::index
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:13
* @route '/admin/metode_pembayaran'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::index
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:13
* @route '/admin/metode_pembayaran'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::index
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:13
* @route '/admin/metode_pembayaran'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::index
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:13
* @route '/admin/metode_pembayaran'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::index
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:13
* @route '/admin/metode_pembayaran'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::index
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:13
* @route '/admin/metode_pembayaran'
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
* @see \App\Http\Controllers\Admin\MetodePembayaranController::create
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/metode_pembayaran/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::create
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::create
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::create
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::create
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::create
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::create
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/create'
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
* @see \App\Http\Controllers\Admin\MetodePembayaranController::store
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:27
* @route '/admin/metode_pembayaran'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/metode_pembayaran',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::store
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:27
* @route '/admin/metode_pembayaran'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::store
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:27
* @route '/admin/metode_pembayaran'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::store
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:27
* @route '/admin/metode_pembayaran'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::store
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:27
* @route '/admin/metode_pembayaran'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::show
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
export const show = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/metode_pembayaran/{metode_pembayaran}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::show
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
show.url = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { metode_pembayaran: args }
    }

    if (Array.isArray(args)) {
        args = {
            metode_pembayaran: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        metode_pembayaran: args.metode_pembayaran,
    }

    return show.definition.url
            .replace('{metode_pembayaran}', parsedArgs.metode_pembayaran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::show
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
show.get = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::show
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
show.head = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::show
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
const showForm = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::show
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
showForm.get = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::show
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
showForm.head = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\MetodePembayaranController::edit
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/{metode_pembayaran}/edit'
*/
export const edit = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/metode_pembayaran/{metode_pembayaran}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::edit
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/{metode_pembayaran}/edit'
*/
edit.url = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { metode_pembayaran: args }
    }

    if (Array.isArray(args)) {
        args = {
            metode_pembayaran: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        metode_pembayaran: args.metode_pembayaran,
    }

    return edit.definition.url
            .replace('{metode_pembayaran}', parsedArgs.metode_pembayaran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::edit
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/{metode_pembayaran}/edit'
*/
edit.get = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::edit
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/{metode_pembayaran}/edit'
*/
edit.head = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::edit
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/{metode_pembayaran}/edit'
*/
const editForm = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::edit
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/{metode_pembayaran}/edit'
*/
editForm.get = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::edit
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:0
* @route '/admin/metode_pembayaran/{metode_pembayaran}/edit'
*/
editForm.head = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\MetodePembayaranController::update
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:48
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
export const update = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/metode_pembayaran/{metode_pembayaran}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::update
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:48
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
update.url = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { metode_pembayaran: args }
    }

    if (Array.isArray(args)) {
        args = {
            metode_pembayaran: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        metode_pembayaran: args.metode_pembayaran,
    }

    return update.definition.url
            .replace('{metode_pembayaran}', parsedArgs.metode_pembayaran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::update
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:48
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
update.put = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::update
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:48
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
update.patch = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::update
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:48
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
const updateForm = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::update
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:48
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
updateForm.put = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::update
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:48
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
updateForm.patch = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\MetodePembayaranController::destroy
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:73
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
export const destroy = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/metode_pembayaran/{metode_pembayaran}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::destroy
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:73
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
destroy.url = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { metode_pembayaran: args }
    }

    if (Array.isArray(args)) {
        args = {
            metode_pembayaran: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        metode_pembayaran: args.metode_pembayaran,
    }

    return destroy.definition.url
            .replace('{metode_pembayaran}', parsedArgs.metode_pembayaran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::destroy
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:73
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
destroy.delete = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::destroy
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:73
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
const destroyForm = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\MetodePembayaranController::destroy
* @see app/Http/Controllers/Admin/MetodePembayaranController.php:73
* @route '/admin/metode_pembayaran/{metode_pembayaran}'
*/
destroyForm.delete = (args: { metode_pembayaran: string | number } | [metode_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const MetodePembayaranController = { index, create, store, show, edit, update, destroy }

export default MetodePembayaranController