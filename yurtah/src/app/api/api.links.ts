const website = 'https://www.yurtah.com'

const api = str => `api/v1/${str}`;
const restAuth = str => `rest-auth/${str}`;

const links = {
    register: restAuth('registration'),
    login: restAuth('login'),
    logout: restAuth('logout'),
    facebookLogin: restAuth('facebook'),
    googleLogin: restAuth('google'),
    listings: api('listings'),
}


export function apiRoute(link) {
    return `${website}/${links[link]}/`;
}