import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::index
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:22
* @route '/admin/transaksi_pembayaran'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/transaksi_pembayaran',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::index
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:22
* @route '/admin/transaksi_pembayaran'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::index
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:22
* @route '/admin/transaksi_pembayaran'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::index
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:22
* @route '/admin/transaksi_pembayaran'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::index
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:22
* @route '/admin/transaksi_pembayaran'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::index
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:22
* @route '/admin/transaksi_pembayaran'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::index
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:22
* @route '/admin/transaksi_pembayaran'
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
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::create
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/transaksi_pembayaran/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::create
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::create
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::create
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::create
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::create
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::create
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/create'
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
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::store
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:35
* @route '/admin/transaksi_pembayaran'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/transaksi_pembayaran',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::store
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:35
* @route '/admin/transaksi_pembayaran'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::store
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:35
* @route '/admin/transaksi_pembayaran'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::store
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:35
* @route '/admin/transaksi_pembayaran'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::store
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:35
* @route '/admin/transaksi_pembayaran'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::show
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
export const show = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/transaksi_pembayaran/{transaksi_pembayaran}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::show
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
show.url = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transaksi_pembayaran: args }
    }

    if (Array.isArray(args)) {
        args = {
            transaksi_pembayaran: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        transaksi_pembayaran: args.transaksi_pembayaran,
    }

    return show.definition.url
            .replace('{transaksi_pembayaran}', parsedArgs.transaksi_pembayaran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::show
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
show.get = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::show
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
show.head = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::show
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
const showForm = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::show
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
showForm.get = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::show
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
showForm.head = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::edit
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}/edit'
*/
export const edit = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/transaksi_pembayaran/{transaksi_pembayaran}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::edit
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}/edit'
*/
edit.url = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transaksi_pembayaran: args }
    }

    if (Array.isArray(args)) {
        args = {
            transaksi_pembayaran: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        transaksi_pembayaran: args.transaksi_pembayaran,
    }

    return edit.definition.url
            .replace('{transaksi_pembayaran}', parsedArgs.transaksi_pembayaran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::edit
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}/edit'
*/
edit.get = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::edit
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}/edit'
*/
edit.head = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::edit
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}/edit'
*/
const editForm = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::edit
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}/edit'
*/
editForm.get = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::edit
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:0
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}/edit'
*/
editForm.head = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::update
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:41
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
export const update = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/transaksi_pembayaran/{transaksi_pembayaran}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::update
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:41
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
update.url = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transaksi_pembayaran: args }
    }

    if (Array.isArray(args)) {
        args = {
            transaksi_pembayaran: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        transaksi_pembayaran: args.transaksi_pembayaran,
    }

    return update.definition.url
            .replace('{transaksi_pembayaran}', parsedArgs.transaksi_pembayaran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::update
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:41
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
update.put = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::update
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:41
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
update.patch = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::update
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:41
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
const updateForm = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::update
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:41
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
updateForm.put = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::update
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:41
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
updateForm.patch = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::destroy
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:47
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
export const destroy = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/transaksi_pembayaran/{transaksi_pembayaran}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::destroy
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:47
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
destroy.url = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transaksi_pembayaran: args }
    }

    if (Array.isArray(args)) {
        args = {
            transaksi_pembayaran: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        transaksi_pembayaran: args.transaksi_pembayaran,
    }

    return destroy.definition.url
            .replace('{transaksi_pembayaran}', parsedArgs.transaksi_pembayaran.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::destroy
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:47
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
destroy.delete = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::destroy
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:47
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
const destroyForm = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\TransaksiPembayaranController::destroy
* @see app/Http/Controllers/Admin/TransaksiPembayaranController.php:47
* @route '/admin/transaksi_pembayaran/{transaksi_pembayaran}'
*/
destroyForm.delete = (args: { transaksi_pembayaran: string | number } | [transaksi_pembayaran: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const TransaksiPembayaranController = { index, create, store, show, edit, update, destroy }

export default TransaksiPembayaranController