function mailmerge(params, args) {
    for(let i = 0, base = 0; i < args.length; i++) {
        while(params[base] != N && base < params.length) base++

        params[base++] = args[i]
    }
    return params
}
export const N = Symbol("Nothing") // undefined

export function postoffice(func, declared_count = 0) {
    const base_params = Array.from({length: declared_count || func.length}).fill(N)

    return function count_params(...args) {
        const params = base_params.slice()
        mailmerge(params, args)

        return (params.some(param => param === N)) ?
            (...args) => count_params(...mailmerge(params.slice(), args)) :
            func(...params)
    }
}
