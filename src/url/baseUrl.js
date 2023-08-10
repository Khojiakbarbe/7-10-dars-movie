const sizes = {
    small: "w342",
    medium: 'w500',
    large: "w780",
    org: "original",
}

export default (path, size = 'medium') => {
    return `http://image.tmdb.org/t/p/${sizes[size]}/${path}`
}