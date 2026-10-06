import DashboardController from './DashboardController'
import PendaftaranServisController from './PendaftaranServisController'
import RiwayatServisController from './RiwayatServisController'

const Pelanggan = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    PendaftaranServisController: Object.assign(PendaftaranServisController, PendaftaranServisController),
    RiwayatServisController: Object.assign(RiwayatServisController, RiwayatServisController),
}

export default Pelanggan