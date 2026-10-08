import DashboardController from './DashboardController'
import PelangganController from './PelangganController'
import SukuCadangController from './SukuCadangController'
import PekerjaanServisController from './PekerjaanServisController'
import DetailPenggunaanPartController from './DetailPenggunaanPartController'
import TransaksiPembayaranController from './TransaksiPembayaranController'
import MetodePembayaranController from './MetodePembayaranController'
import UserController from './UserController'

const Admin = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    PelangganController: Object.assign(PelangganController, PelangganController),
    SukuCadangController: Object.assign(SukuCadangController, SukuCadangController),
    PekerjaanServisController: Object.assign(PekerjaanServisController, PekerjaanServisController),
    DetailPenggunaanPartController: Object.assign(DetailPenggunaanPartController, DetailPenggunaanPartController),
    TransaksiPembayaranController: Object.assign(TransaksiPembayaranController, TransaksiPembayaranController),
    MetodePembayaranController: Object.assign(MetodePembayaranController, MetodePembayaranController),
    UserController: Object.assign(UserController, UserController),
}

export default Admin