import Auth from './Auth'
import Admin from './Admin'
import Pelanggan from './Pelanggan'
import Settings from './Settings'

const Controllers = {
    Auth: Object.assign(Auth, Auth),
    Admin: Object.assign(Admin, Admin),
    Pelanggan: Object.assign(Pelanggan, Pelanggan),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers