import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Pelanggan\DashboardController::index
* @see app/Http/Controllers/Pelanggan/DashboardController.php:11
* @route '/pelanggan'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/pelanggan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Pelanggan\DashboardController::index
* @see app/Http/Controllers/Pelanggan/DashboardController.php:11
* @route '/pelanggan'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Pelanggan\DashboardController::index
* @see app/Http/Controllers/Pelanggan/DashboardController.php:11
* @route '/pelanggan'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Pelanggan\DashboardController::index
* @see app/Http/Controllers/Pelanggan/DashboardController.php:11
* @route '/pelanggan'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Pelanggan\DashboardController::index
* @see app/Http/Controllers/Pelanggan/DashboardController.php:11
* @route '/pelanggan'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Pelanggan\DashboardController::index
* @see app/Http/Controllers/Pelanggan/DashboardController.php:11
* @route '/pelanggan'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Pelanggan\DashboardController::index
* @see app/Http/Controllers/Pelanggan/DashboardController.php:11
* @route '/pelanggan'
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

const DashboardController = { index }

export default DashboardController