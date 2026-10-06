import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::index
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:25
* @route '/admin/detail_penggunaan_part'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/detail_penggunaan_part',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::index
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:25
* @route '/admin/detail_penggunaan_part'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::index
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:25
* @route '/admin/detail_penggunaan_part'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::index
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:25
* @route '/admin/detail_penggunaan_part'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::index
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:25
* @route '/admin/detail_penggunaan_part'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::index
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:25
* @route '/admin/detail_penggunaan_part'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::index
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:25
* @route '/admin/detail_penggunaan_part'
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
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::create
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/detail_penggunaan_part/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::create
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::create
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::create
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::create
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::create
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::create
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/create'
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
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::store
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:39
* @route '/admin/detail_penggunaan_part'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/detail_penggunaan_part',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::store
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:39
* @route '/admin/detail_penggunaan_part'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::store
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:39
* @route '/admin/detail_penggunaan_part'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::store
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:39
* @route '/admin/detail_penggunaan_part'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::store
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:39
* @route '/admin/detail_penggunaan_part'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::show
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
export const show = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/detail_penggunaan_part/{detail_penggunaan_part}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::show
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
show.url = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { detail_penggunaan_part: args }
    }

    if (Array.isArray(args)) {
        args = {
            detail_penggunaan_part: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        detail_penggunaan_part: args.detail_penggunaan_part,
    }

    return show.definition.url
            .replace('{detail_penggunaan_part}', parsedArgs.detail_penggunaan_part.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::show
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
show.get = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::show
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
show.head = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::show
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
const showForm = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::show
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
showForm.get = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::show
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
showForm.head = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::edit
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}/edit'
*/
export const edit = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/detail_penggunaan_part/{detail_penggunaan_part}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::edit
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}/edit'
*/
edit.url = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { detail_penggunaan_part: args }
    }

    if (Array.isArray(args)) {
        args = {
            detail_penggunaan_part: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        detail_penggunaan_part: args.detail_penggunaan_part,
    }

    return edit.definition.url
            .replace('{detail_penggunaan_part}', parsedArgs.detail_penggunaan_part.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::edit
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}/edit'
*/
edit.get = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::edit
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}/edit'
*/
edit.head = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::edit
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}/edit'
*/
const editForm = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::edit
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}/edit'
*/
editForm.get = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::edit
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:0
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}/edit'
*/
editForm.head = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::update
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:45
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
export const update = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/detail_penggunaan_part/{detail_penggunaan_part}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::update
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:45
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
update.url = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { detail_penggunaan_part: args }
    }

    if (Array.isArray(args)) {
        args = {
            detail_penggunaan_part: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        detail_penggunaan_part: args.detail_penggunaan_part,
    }

    return update.definition.url
            .replace('{detail_penggunaan_part}', parsedArgs.detail_penggunaan_part.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::update
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:45
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
update.put = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::update
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:45
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
update.patch = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::update
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:45
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
const updateForm = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::update
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:45
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
updateForm.put = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::update
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:45
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
updateForm.patch = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::destroy
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:51
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
export const destroy = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/detail_penggunaan_part/{detail_penggunaan_part}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::destroy
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:51
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
destroy.url = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { detail_penggunaan_part: args }
    }

    if (Array.isArray(args)) {
        args = {
            detail_penggunaan_part: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        detail_penggunaan_part: args.detail_penggunaan_part,
    }

    return destroy.definition.url
            .replace('{detail_penggunaan_part}', parsedArgs.detail_penggunaan_part.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::destroy
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:51
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
destroy.delete = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::destroy
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:51
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
const destroyForm = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\DetailPenggunaanPartController::destroy
* @see app/Http/Controllers/Admin/DetailPenggunaanPartController.php:51
* @route '/admin/detail_penggunaan_part/{detail_penggunaan_part}'
*/
destroyForm.delete = (args: { detail_penggunaan_part: string | number } | [detail_penggunaan_part: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const detail_penggunaan_part = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default detail_penggunaan_part