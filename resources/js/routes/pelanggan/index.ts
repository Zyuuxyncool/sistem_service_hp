import pendaftaran_servis from './pendaftaran_servis'
import riwayat_servis from './riwayat_servis'
import penilaian_servis from './penilaian_servis'
import katalog from './katalog'

const pelanggan = {
    pendaftaran_servis: Object.assign(pendaftaran_servis, pendaftaran_servis),
    riwayat_servis: Object.assign(riwayat_servis, riwayat_servis),
    penilaian_servis: Object.assign(penilaian_servis, penilaian_servis),
    katalog: Object.assign(katalog, katalog),
}

export default pelanggan