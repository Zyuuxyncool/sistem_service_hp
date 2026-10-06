import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\PelangganController::index
* @see app/Http/Controllers/Admin/PelangganController.php:19
* @route '/admin/pelanggan'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/pelanggan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PelangganController::index
* @see app/Http/Controllers/Admin/PelangganController.php:19
* @route '/admin/pelanggan'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PelangganController::index
* @see app/Http/Controllers/Admin/PelangganController.php:19
* @route '/admin/pelanggan'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::index
* @see app/Http/Controllers/Admin/PelangganController.php:19
* @route '/admin/pelanggan'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::index
* @see app/Http/Controllers/Admin/PelangganController.php:19
* @route '/admin/pelanggan'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::index
* @see app/Http/Controllers/Admin/PelangganController.php:19
* @route '/admin/pelanggan'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::index
* @see app/Http/Controllers/Admin/PelangganController.php:19
* @route '/admin/pelanggan'
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
* @see \App\Http\Controllers\Admin\PelangganController::create
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/pelanggan/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PelangganController::create
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PelangganController::create
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::create
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::create
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::create
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::create
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/create'
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
* @see \App\Http\Controllers\Admin\PelangganController::store
* @see app/Http/Controllers/Admin/PelangganController.php:27
* @route '/admin/pelanggan'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/pelanggan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\PelangganController::store
* @see app/Http/Controllers/Admin/PelangganController.php:27
* @route '/admin/pelanggan'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PelangganController::store
* @see app/Http/Controllers/Admin/PelangganController.php:27
* @route '/admin/pelanggan'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::store
* @see app/Http/Controllers/Admin/PelangganController.php:27
* @route '/admin/pelanggan'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::store
* @see app/Http/Controllers/Admin/PelangganController.php:27
* @route '/admin/pelanggan'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\PelangganController::show
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/{pelanggan}'
*/
export const show = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/pelanggan/{pelanggan}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PelangganController::show
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/{pelanggan}'
*/
show.url = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pelanggan: args }
    }

    if (Array.isArray(args)) {
        args = {
            pelanggan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        pelanggan: args.pelanggan,
    }

    return show.definition.url
            .replace('{pelanggan}', parsedArgs.pelanggan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PelangganController::show
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/{pelanggan}'
*/
show.get = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::show
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/{pelanggan}'
*/
show.head = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::show
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/{pelanggan}'
*/
const showForm = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::show
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/{pelanggan}'
*/
showForm.get = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::show
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/{pelanggan}'
*/
showForm.head = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\PelangganController::edit
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/{pelanggan}/edit'
*/
export const edit = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/pelanggan/{pelanggan}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PelangganController::edit
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/{pelanggan}/edit'
*/
edit.url = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pelanggan: args }
    }

    if (Array.isArray(args)) {
        args = {
            pelanggan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        pelanggan: args.pelanggan,
    }

    return edit.definition.url
            .replace('{pelanggan}', parsedArgs.pelanggan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PelangganController::edit
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/{pelanggan}/edit'
*/
edit.get = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::edit
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/{pelanggan}/edit'
*/
edit.head = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::edit
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/{pelanggan}/edit'
*/
const editForm = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::edit
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/{pelanggan}/edit'
*/
editForm.get = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::edit
* @see app/Http/Controllers/Admin/PelangganController.php:0
* @route '/admin/pelanggan/{pelanggan}/edit'
*/
editForm.head = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\PelangganController::update
* @see app/Http/Controllers/Admin/PelangganController.php:33
* @route '/admin/pelanggan/{pelanggan}'
*/
export const update = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/pelanggan/{pelanggan}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\PelangganController::update
* @see app/Http/Controllers/Admin/PelangganController.php:33
* @route '/admin/pelanggan/{pelanggan}'
*/
update.url = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pelanggan: args }
    }

    if (Array.isArray(args)) {
        args = {
            pelanggan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        pelanggan: args.pelanggan,
    }

    return update.definition.url
            .replace('{pelanggan}', parsedArgs.pelanggan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PelangganController::update
* @see app/Http/Controllers/Admin/PelangganController.php:33
* @route '/admin/pelanggan/{pelanggan}'
*/
update.put = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::update
* @see app/Http/Controllers/Admin/PelangganController.php:33
* @route '/admin/pelanggan/{pelanggan}'
*/
update.patch = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::update
* @see app/Http/Controllers/Admin/PelangganController.php:33
* @route '/admin/pelanggan/{pelanggan}'
*/
const updateForm = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::update
* @see app/Http/Controllers/Admin/PelangganController.php:33
* @route '/admin/pelanggan/{pelanggan}'
*/
updateForm.put = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::update
* @see app/Http/Controllers/Admin/PelangganController.php:33
* @route '/admin/pelanggan/{pelanggan}'
*/
updateForm.patch = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\PelangganController::destroy
* @see app/Http/Controllers/Admin/PelangganController.php:39
* @route '/admin/pelanggan/{pelanggan}'
*/
export const destroy = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/pelanggan/{pelanggan}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\PelangganController::destroy
* @see app/Http/Controllers/Admin/PelangganController.php:39
* @route '/admin/pelanggan/{pelanggan}'
*/
destroy.url = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pelanggan: args }
    }

    if (Array.isArray(args)) {
        args = {
            pelanggan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        pelanggan: args.pelanggan,
    }

    return destroy.definition.url
            .replace('{pelanggan}', parsedArgs.pelanggan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PelangganController::destroy
* @see app/Http/Controllers/Admin/PelangganController.php:39
* @route '/admin/pelanggan/{pelanggan}'
*/
destroy.delete = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::destroy
* @see app/Http/Controllers/Admin/PelangganController.php:39
* @route '/admin/pelanggan/{pelanggan}'
*/
const destroyForm = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\PelangganController::destroy
* @see app/Http/Controllers/Admin/PelangganController.php:39
* @route '/admin/pelanggan/{pelanggan}'
*/
destroyForm.delete = (args: { pelanggan: string | number } | [pelanggan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const pelanggan = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default pelanggan