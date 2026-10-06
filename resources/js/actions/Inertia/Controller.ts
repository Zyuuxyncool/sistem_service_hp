import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
const Controller980bb49ee7ae63891f1d891d2fbcf1c9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

Controller980bb49ee7ae63891f1d891d2fbcf1c9.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
Controller980bb49ee7ae63891f1d891d2fbcf1c9.url = (options?: RouteQueryOptions) => {
    return Controller980bb49ee7ae63891f1d891d2fbcf1c9.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
Controller980bb49ee7ae63891f1d891d2fbcf1c9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
Controller980bb49ee7ae63891f1d891d2fbcf1c9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
const Controller980bb49ee7ae63891f1d891d2fbcf1c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
Controller980bb49ee7ae63891f1d891d2fbcf1c9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
Controller980bb49ee7ae63891f1d891d2fbcf1c9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller980bb49ee7ae63891f1d891d2fbcf1c9.form = Controller980bb49ee7ae63891f1d891d2fbcf1c9Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/layanan'
*/
const Controller7221908f5fe9d8779c6d12eead4f6def = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller7221908f5fe9d8779c6d12eead4f6def.url(options),
    method: 'get',
})

Controller7221908f5fe9d8779c6d12eead4f6def.definition = {
    methods: ["get","head"],
    url: '/layanan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/layanan'
*/
Controller7221908f5fe9d8779c6d12eead4f6def.url = (options?: RouteQueryOptions) => {
    return Controller7221908f5fe9d8779c6d12eead4f6def.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/layanan'
*/
Controller7221908f5fe9d8779c6d12eead4f6def.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller7221908f5fe9d8779c6d12eead4f6def.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/layanan'
*/
Controller7221908f5fe9d8779c6d12eead4f6def.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller7221908f5fe9d8779c6d12eead4f6def.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/layanan'
*/
const Controller7221908f5fe9d8779c6d12eead4f6defForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller7221908f5fe9d8779c6d12eead4f6def.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/layanan'
*/
Controller7221908f5fe9d8779c6d12eead4f6defForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller7221908f5fe9d8779c6d12eead4f6def.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/layanan'
*/
Controller7221908f5fe9d8779c6d12eead4f6defForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller7221908f5fe9d8779c6d12eead4f6def.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller7221908f5fe9d8779c6d12eead4f6def.form = Controller7221908f5fe9d8779c6d12eead4f6defForm
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/prosedur'
*/
const Controller37da3beb4d538ba4ba7995d4265a3548 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller37da3beb4d538ba4ba7995d4265a3548.url(options),
    method: 'get',
})

Controller37da3beb4d538ba4ba7995d4265a3548.definition = {
    methods: ["get","head"],
    url: '/prosedur',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/prosedur'
*/
Controller37da3beb4d538ba4ba7995d4265a3548.url = (options?: RouteQueryOptions) => {
    return Controller37da3beb4d538ba4ba7995d4265a3548.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/prosedur'
*/
Controller37da3beb4d538ba4ba7995d4265a3548.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller37da3beb4d538ba4ba7995d4265a3548.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/prosedur'
*/
Controller37da3beb4d538ba4ba7995d4265a3548.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller37da3beb4d538ba4ba7995d4265a3548.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/prosedur'
*/
const Controller37da3beb4d538ba4ba7995d4265a3548Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller37da3beb4d538ba4ba7995d4265a3548.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/prosedur'
*/
Controller37da3beb4d538ba4ba7995d4265a3548Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller37da3beb4d538ba4ba7995d4265a3548.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/prosedur'
*/
Controller37da3beb4d538ba4ba7995d4265a3548Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller37da3beb4d538ba4ba7995d4265a3548.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller37da3beb4d538ba4ba7995d4265a3548.form = Controller37da3beb4d538ba4ba7995d4265a3548Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/pelanggan/penilaian-servis'
*/
const Controllere2458d712ddb765dc1fa36f2f183eaf0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere2458d712ddb765dc1fa36f2f183eaf0.url(options),
    method: 'get',
})

Controllere2458d712ddb765dc1fa36f2f183eaf0.definition = {
    methods: ["get","head"],
    url: '/pelanggan/penilaian-servis',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/pelanggan/penilaian-servis'
*/
Controllere2458d712ddb765dc1fa36f2f183eaf0.url = (options?: RouteQueryOptions) => {
    return Controllere2458d712ddb765dc1fa36f2f183eaf0.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/pelanggan/penilaian-servis'
*/
Controllere2458d712ddb765dc1fa36f2f183eaf0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere2458d712ddb765dc1fa36f2f183eaf0.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/pelanggan/penilaian-servis'
*/
Controllere2458d712ddb765dc1fa36f2f183eaf0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllere2458d712ddb765dc1fa36f2f183eaf0.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/pelanggan/penilaian-servis'
*/
const Controllere2458d712ddb765dc1fa36f2f183eaf0Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere2458d712ddb765dc1fa36f2f183eaf0.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/pelanggan/penilaian-servis'
*/
Controllere2458d712ddb765dc1fa36f2f183eaf0Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere2458d712ddb765dc1fa36f2f183eaf0.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/pelanggan/penilaian-servis'
*/
Controllere2458d712ddb765dc1fa36f2f183eaf0Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere2458d712ddb765dc1fa36f2f183eaf0.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controllere2458d712ddb765dc1fa36f2f183eaf0.form = Controllere2458d712ddb765dc1fa36f2f183eaf0Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/pelanggan/katalog'
*/
const Controller695f81a196b3aec93b48d77594556630 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller695f81a196b3aec93b48d77594556630.url(options),
    method: 'get',
})

Controller695f81a196b3aec93b48d77594556630.definition = {
    methods: ["get","head"],
    url: '/pelanggan/katalog',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/pelanggan/katalog'
*/
Controller695f81a196b3aec93b48d77594556630.url = (options?: RouteQueryOptions) => {
    return Controller695f81a196b3aec93b48d77594556630.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/pelanggan/katalog'
*/
Controller695f81a196b3aec93b48d77594556630.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller695f81a196b3aec93b48d77594556630.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/pelanggan/katalog'
*/
Controller695f81a196b3aec93b48d77594556630.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller695f81a196b3aec93b48d77594556630.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/pelanggan/katalog'
*/
const Controller695f81a196b3aec93b48d77594556630Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller695f81a196b3aec93b48d77594556630.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/pelanggan/katalog'
*/
Controller695f81a196b3aec93b48d77594556630Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller695f81a196b3aec93b48d77594556630.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/pelanggan/katalog'
*/
Controller695f81a196b3aec93b48d77594556630Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller695f81a196b3aec93b48d77594556630.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller695f81a196b3aec93b48d77594556630.form = Controller695f81a196b3aec93b48d77594556630Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
const Controllere19ee86e9cf603ce1a59a1ec5d21dec5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition = {
    methods: ["get","head"],
    url: '/settings/appearance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url = (options?: RouteQueryOptions) => {
    return Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
const Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controllere19ee86e9cf603ce1a59a1ec5d21dec5.form = Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form

/**
* Multiple routes resolve to \Inertia\Controller::Controller, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `Controller['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
const Controller = {
    '/': Controller980bb49ee7ae63891f1d891d2fbcf1c9,
    '/layanan': Controller7221908f5fe9d8779c6d12eead4f6def,
    '/prosedur': Controller37da3beb4d538ba4ba7995d4265a3548,
    '/pelanggan/penilaian-servis': Controllere2458d712ddb765dc1fa36f2f183eaf0,
    '/pelanggan/katalog': Controller695f81a196b3aec93b48d77594556630,
    '/settings/appearance': Controllere19ee86e9cf603ce1a59a1ec5d21dec5,
}

export default Controller