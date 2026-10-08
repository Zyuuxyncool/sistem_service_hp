import pelanggan from './pelanggan'
import suku_cadang from './suku_cadang'
import pekerjaan_servis from './pekerjaan_servis'
import detail_penggunaan_part from './detail_penggunaan_part'
import transaksi_pembayaran from './transaksi_pembayaran'
import metode_pembayaran from './metode_pembayaran'
import user from './user'

const admin = {
    pelanggan: Object.assign(pelanggan, pelanggan),
    suku_cadang: Object.assign(suku_cadang, suku_cadang),
    pekerjaan_servis: Object.assign(pekerjaan_servis, pekerjaan_servis),
    detail_penggunaan_part: Object.assign(detail_penggunaan_part, detail_penggunaan_part),
    transaksi_pembayaran: Object.assign(transaksi_pembayaran, transaksi_pembayaran),
    metode_pembayaran: Object.assign(metode_pembayaran, metode_pembayaran),
    user: Object.assign(user, user),
}

export default admin