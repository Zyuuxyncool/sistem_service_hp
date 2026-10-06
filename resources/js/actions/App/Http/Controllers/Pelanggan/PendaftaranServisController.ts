import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Pelanggan\PendaftaranServisController::index
* @see app/Http/Controllers/Pelanggan/PendaftaranServisController.php:11
* @route '/pelanggan/pendaftaran-servis'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/pelanggan/pendaftaran-servis',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Pelanggan\PendaftaranServisController::index
* @see app/Http/Controllers/Pelanggan/PendaftaranServisController.php:11
* @route '/pelanggan/pendaftaran-servis'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Pelanggan\PendaftaranServisController::index
* @see app/Http/Controllers/Pelanggan/PendaftaranServisController.php:11
* @route '/pelanggan/pendaftaran-servis'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Pelanggan\PendaftaranServisController::index
* @see app/Http/Controllers/Pelanggan/PendaftaranServisController.php:11
* @route '/pelanggan/pendaftaran-servis'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Pelanggan\PendaftaranServisController::index
* @see app/Http/Controllers/Pelanggan/PendaftaranServisController.php:11
* @route '/pelanggan/pendaftaran-servis'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Pelanggan\PendaftaranServisController::index
* @see app/Http/Controllers/Pelanggan/PendaftaranServisController.php:11
* @route '/pelanggan/pendaftaran-servis'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Pelanggan\PendaftaranServisController::index
* @see app/Http/Controllers/Pelanggan/PendaftaranServisController.php:11
* @route '/pelanggan/pendaftaran-servis'
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
* @see \App\Http\Controllers\Pelanggan\PendaftaranServisController::store
* @see app/Http/Controllers/Pelanggan/PendaftaranServisController.php:16
* @route '/pelanggan/pendaftaran-servis'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/pelanggan/pendaftaran-servis',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Pelanggan\PendaftaranServisController::store
* @see app/Http/Controllers/Pelanggan/PendaftaranServisController.php:16
* @route '/pelanggan/pendaftaran-servis'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Pelanggan\PendaftaranServisController::store
* @see app/Http/Controllers/Pelanggan/PendaftaranServisController.php:16
* @route '/pelanggan/pendaftaran-servis'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Pelanggan\PendaftaranServisController::store
* @see app/Http/Controllers/Pelanggan/PendaftaranServisController.php:16
* @route '/pelanggan/pendaftaran-servis'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Pelanggan\PendaftaranServisController::store
* @see app/Http/Controllers/Pelanggan/PendaftaranServisController.php:16
* @route '/pelanggan/pendaftaran-servis'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const PendaftaranServisController = { index, store }

export default PendaftaranServisController