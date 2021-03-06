import Images from "../../assets/images";

export default function ImagesArray(imgName) {
    if (imgName === null) {
        return Images.m_aga;
    }

    return imagesArray[imgName];
}

const imagesArray = {
    'agricola' : Images.b_agricola,
    'pecuario' : Images.b_pecuario,
    'pesquero' : Images.b_pesquero,

    'Fagricola' : Images.f_agricola,
    'Fpecuario' : Images.f_pecuario,
    'Fpesquero' : Images.f_pesquero,

    'Fagricola2' : Images.fi_agricola,
    'Fpecuario2' : Images.fi_pecuario,
    'Fpesquero2' : Images.fi_pesquero,

    'b_aga.jpg' : Images.b_aga,
    'b_agu.jpg' : Images.b_agu,
    'b_ajo.jpg' : Images.b_ajo,
    'b_alf.jpg' : Images.b_alf,
    'b_alg.jpg' : Images.b_alg,
    'b_ama.jpg' : Images.b_ama,
    'b_ara.jpg' : Images.b_ara,
    'b_arr.jpg' : Images.b_arr,
    'b_atu.jpg' : Images.b_atu,
    'b_avf.jpg' : Images.b_avf,
    'b_avg.jpg' : Images.b_avg,
    'b_ber.jpg' : Images.b_ber,
    'b_bro.jpg' : Images.b_bro,
    'b_cac.jpg' : Images.b_cac,
    'b_caf.jpg' : Images.b_caf,
    'b_cal.jpg' : Images.b_cal,
    'b_cam.jpg' : Images.b_cam,
    'b_can.jpg' : Images.b_can,
    'b_car.jpg' : Images.b_car,
    'b_cca.jpg' : Images.b_cca,
    'b_ccb.jpg' : Images.b_ccb,
    'b_ccc.jpg' : Images.b_ccc,
    'b_cco.jpg' : Images.b_cco,
    'b_ccp.jpg' : Images.b_ccp,
    'b_ceb.jpg' : Images.b_ceb,
    'b_ceg.jpg' : Images.b_ceg,
    'b_chi.jpg' : Images.b_chi,
    'b_col.jpg' : Images.b_col,
    'b_cop.jpg' : Images.b_cop,
    'b_dur.jpg' : Images.b_dur,
    'b_esp.jpg' : Images.b_esp,
    'b_fra.jpg' : Images.b_fra,
    'b_fre.jpg' : Images.b_fre,
    'b_fri.jpg' : Images.b_fri,
    'b_gar.jpg' : Images.b_gar,
    'b_ger.jpg' : Images.b_ger,
    'b_gua.jpg' : Images.b_gua,
    'b_hue.jpg' : Images.b_hue,
    'b_jit.jpg' : Images.b_jit,
    'b_lan.jpg' : Images.b_lan,
    'b_leb.jpg' : Images.b_leb,
    'b_lec.jpg' : Images.b_lec,
    'b_leh.jpg' : Images.b_leh,
    'b_lim.jpg' : Images.b_lim,
    'b_maf.jpg' : Images.b_maf,
    'b_mag.jpg' : Images.b_mag,
    'b_man.jpg' : Images.b_man,
    'b_maz.jpg' : Images.b_maz,
    'b_mel.jpg' : Images.b_mel,
    'b_mie.jpg' : Images.b_mie,
    'b_moj.jpg' : Images.b_moj,
    'b_nar.jpg' : Images.b_nar,
    'b_nop.jpg' : Images.b_nop,
    'b_nue.jpg' : Images.b_nue,
    'b_pap.jpg' : Images.b_pap,
    'b_pay.jpg' : Images.b_pay,
    'b_pep.jpg' : Images.b_pep,
    'b_per.jpg' : Images.b_per,
    'b_pin.jpg' : Images.b_pin,
    'b_pla.jpg' : Images.b_pla,
    'b_pul.jpg' : Images.b_pul,
    'b_ros.jpg' : Images.b_ros,
    'b_san.jpg' : Images.b_san,
    'b_sar.jpg' : Images.b_sar,
    'b_sof.jpg' : Images.b_sof,
    'b_sog.jpg' : Images.b_sog,
    'b_soy.jpg' : Images.b_soy,
    'b_tab.jpg' : Images.b_tab,
    'b_tom.jpg' : Images.b_tom,
    'b_tor.jpg' : Images.b_tor,
    'b_tri.jpg' : Images.b_tri,
    'b_uvf.jpg' : Images.b_uvf,
    'b_uvi.jpg' : Images.b_uvi,
    'b_uvp.jpg' : Images.b_uvp,
    'b_zar.jpg' : Images.b_zar,

    'f_aga.jpg' : Images.f_aga,
    'f_agu.jpg' : Images.f_agu,
    'f_ajo.jpg' : Images.f_ajo,
    'f_alf.jpg' : Images.f_alf,
    'f_alg.jpg' : Images.f_alg,
    'f_ama.jpg' : Images.f_ama,
    'f_ara.jpg' : Images.f_ara,
    'f_arr.jpg' : Images.f_arr,
    'f_atu.jpg' : Images.f_atu,
    'f_avf.jpg' : Images.f_avf,
    'f_avg.jpg' : Images.f_avg,
    'f_ber.jpg' : Images.f_ber,
    'f_bro.jpg' : Images.f_bro,
    'f_cac.jpg' : Images.f_cac,
    'f_caf.jpg' : Images.f_caf,
    'f_cal.jpg' : Images.f_cal,
    'f_cam.jpg' : Images.f_cam,
    'f_can.jpg' : Images.f_can,
    'f_car.jpg' : Images.f_car,
    'f_cca.jpg' : Images.f_cca,
    'f_ccb.jpg' : Images.f_ccb,
    'f_ccc.jpg' : Images.f_ccc,
    'f_cco.jpg' : Images.f_cco,
    'f_ccp.jpg' : Images.f_ccp,
    'f_ceb.jpg' : Images.f_ceb,
    'f_ceg.jpg' : Images.f_ceg,
    'f_chi.jpg' : Images.f_chi,
    'f_col.jpg' : Images.f_col,
    'f_cop.jpg' : Images.f_cop,
    'f_dur.jpg' : Images.f_dur,
    'f_esp.jpg' : Images.f_esp,
    'f_fra.jpg' : Images.f_fra,
    'f_fre.jpg' : Images.f_fre,
    'f_fri.jpg' : Images.f_fri,
    'f_gar.jpg' : Images.f_gar,
    'f_ger.jpg' : Images.f_ger,
    'f_gua.jpg' : Images.f_gua,
    'f_hue.jpg' : Images.f_hue,
    'f_jit.jpg' : Images.f_jit,
    'f_lan.jpg' : Images.f_lan,
    'f_leb.jpg' : Images.f_leb,
    'f_lec.jpg' : Images.f_lec,
    'f_leh.jpg' : Images.f_leh,
    'f_lim.jpg' : Images.f_lim,
    'f_maf.jpg' : Images.f_maf,
    'f_mag.jpg' : Images.f_mag,
    'f_man.jpg' : Images.f_man,
    'f_maz.jpg' : Images.f_maz,
    'f_mel.jpg' : Images.f_mel,
    'f_mie.jpg' : Images.f_mie,
    'f_moj.jpg' : Images.f_moj,
    'f_nar.jpg' : Images.f_nar,
    'f_nop.jpg' : Images.f_nop,
    'f_nue.jpg' : Images.f_nue,
    'f_pap.jpg' : Images.f_pap,
    'f_pay.jpg' : Images.f_pay,
    'f_pep.jpg' : Images.f_pep,
    'f_per.jpg' : Images.f_per,
    'f_pin.jpg' : Images.f_pin,
    'f_pla.jpg' : Images.f_pla,
    'f_pul.jpg' : Images.f_pul,
    'f_ros.jpg' : Images.f_ros,
    'f_san.jpg' : Images.f_san,
    'f_sar.jpg' : Images.f_sar,
    'f_sof.jpg' : Images.f_sof,
    'f_sog.jpg' : Images.f_sog,
    'f_soy.jpg' : Images.f_soy,
    'f_tab.jpg' : Images.f_tab,
    'f_tom.jpg' : Images.f_tom,
    'f_tor.jpg' : Images.f_tor,
    'f_tri.jpg' : Images.f_tri,
    'f_uvf.jpg' : Images.f_uvf,
    'f_uvi.jpg' : Images.f_uvi,
    'f_uvp.jpg' : Images.f_uvp,
    'f_zar.jpg' : Images.f_zar,


    't_aga.jpg' : Images.t_aga,
    't_agu.jpg' : Images.t_agu,
    't_ajo.jpg' : Images.t_ajo,
    't_alf.jpg' : Images.t_alf,
    't_alg.jpg' : Images.t_alg,
    't_ama.jpg' : Images.t_ama,
    't_ara.jpg' : Images.t_ara,
    't_arr.jpg' : Images.t_arr,
    't_atu.jpg' : Images.t_atu,
    't_avf.jpg' : Images.t_avf,
    't_avg.jpg' : Images.t_avg,
    't_ber.jpg' : Images.t_ber,
    't_bro.jpg' : Images.t_bro,
    't_cac.jpg' : Images.t_cac,
    't_caf.jpg' : Images.t_caf,
    't_cal.jpg' : Images.t_cal,
    't_cam.jpg' : Images.t_cam,
    't_can.jpg' : Images.t_can,
    't_car.jpg' : Images.t_car,
    't_cca.jpg' : Images.t_cca,
    't_ccb.jpg' : Images.t_ccb,
    't_ccc.jpg' : Images.t_ccc,
    't_cco.jpg' : Images.t_cco,
    't_ccp.jpg' : Images.t_ccp,
    't_ceb.jpg' : Images.t_ceb,
    't_ceg.jpg' : Images.t_ceg,
    't_chi.jpg' : Images.t_chi,
    't_col.jpg' : Images.t_col,
    't_cop.jpg' : Images.t_cop,
    't_dur.jpg' : Images.t_dur,
    't_esp.jpg' : Images.t_esp,
    't_fra.jpg' : Images.t_fra,
    't_fre.jpg' : Images.t_fre,
    't_fri.jpg' : Images.t_fri,
    't_gar.jpg' : Images.t_gar,
    't_ger.jpg' : Images.t_ger,
    't_gua.jpg' : Images.t_gua,
    't_hue.jpg' : Images.t_hue,
    't_jit.jpg' : Images.t_jit,
    't_lan.jpg' : Images.t_lan,
    't_leb.jpg' : Images.t_leb,
    't_lec.jpg' : Images.t_lec,
    't_leh.jpg' : Images.t_leh,
    't_lim.jpg' : Images.t_lim,
    't_maf.jpg' : Images.t_maf,
    't_mag.jpg' : Images.t_mag,
    't_man.jpg' : Images.t_man,
    't_maz.jpg' : Images.t_maz,
    't_mel.jpg' : Images.t_mel,
    't_mie.jpg' : Images.t_mie,
    't_moj.jpg' : Images.t_moj,
    't_nar.jpg' : Images.t_nar,
    't_nop.jpg' : Images.t_nop,
    't_nue.jpg' : Images.t_nue,
    't_pap.jpg' : Images.t_pap,
    't_pay.jpg' : Images.t_pay,
    't_pep.jpg' : Images.t_pep,
    't_per.jpg' : Images.t_per,
    't_pin.jpg' : Images.t_pin,
    't_pla.jpg' : Images.t_pla,
    't_pul.jpg' : Images.t_pul,
    't_ros.jpg' : Images.t_ros,
    't_san.jpg' : Images.t_san,
    't_sar.jpg' : Images.t_sar,
    't_sof.jpg' : Images.t_sof,
    't_sog.jpg' : Images.t_sog,
    't_soy.jpg' : Images.t_soy,
    't_tab.jpg' : Images.t_tab,
    't_tom.jpg' : Images.t_tom,
    't_tor.jpg' : Images.t_tor,
    't_tri.jpg' : Images.t_tri,
    't_uvf.jpg' : Images.t_uvf,
    't_uvi.jpg' : Images.t_uvi,
    't_uvp.jpg' : Images.t_uvp,
    't_zar.jpg' : Images.t_zar,

    'm_aga.jpg' : Images.m_aga,
    'm_agu.jpg' : Images.m_agu,
    'm_ajo.jpg' : Images.m_ajo,
    'm_alf.jpg' : Images.m_alf,
    'm_alg.jpg' : Images.m_alg,
    'm_ama.jpg' : Images.m_ama,
    'm_ara.jpg' : Images.m_ara,
    'm_arr.jpg' : Images.m_arr,
    'm_atu.jpg' : Images.m_atu,
    'm_avf.jpg' : Images.m_avf,
    'm_avg.jpg' : Images.m_avg,
    'm_ber.jpg' : Images.m_ber,
    'm_bro.jpg' : Images.m_bro,
    'm_cac.jpg' : Images.m_cac,
    'm_caf.jpg' : Images.m_caf,
    'm_cal.jpg' : Images.m_cal,
    'm_cam.jpg' : Images.m_cam,
    'm_can.jpg' : Images.m_can,
    'm_car.jpg' : Images.m_car,
    'm_cca.jpg' : Images.m_cca,
    'm_ccb.jpg' : Images.m_ccb,
    'm_ccc.jpg' : Images.m_ccc,
    'm_cco.jpg' : Images.m_cco,
    'm_ccp.jpg' : Images.m_ccp,
    'm_ceb.jpg' : Images.m_ceb,
    'm_ceg.jpg' : Images.m_ceg,
    'm_chi.jpg' : Images.m_chi,
    'm_col.jpg' : Images.m_col,
    'm_cop.jpg' : Images.m_cop,
    'm_dur.jpg' : Images.m_dur,
    'm_esp.jpg' : Images.m_esp,
    'm_fra.jpg' : Images.m_fra,
    'm_fre.jpg' : Images.m_fre,
    'm_fri.jpg' : Images.m_fri,
    'm_gar.jpg' : Images.m_gar,
    'm_ger.jpg' : Images.m_ger,
    'm_gua.jpg' : Images.m_gua,
    'm_hue.jpg' : Images.m_hue,
    'm_jit.jpg' : Images.m_jit,
    'm_lan.jpg' : Images.m_lan,
    'm_leb.jpg' : Images.m_leb,
    'm_lec.jpg' : Images.m_lec,
    'm_leh.jpg' : Images.m_leh,
    'm_lim.jpg' : Images.m_lim,
    'm_maf.jpg' : Images.m_maf,
    'm_mag.jpg' : Images.m_mag,
    'm_man.jpg' : Images.m_man,
    'm_maz.jpg' : Images.m_maz,
    'm_mel.jpg' : Images.m_mel,
    'm_mie.jpg' : Images.m_mie,
    'm_moj.jpg' : Images.m_moj,
    'm_nar.jpg' : Images.m_nar,
    'm_nop.jpg' : Images.m_nop,
    'm_nue.jpg' : Images.m_nue,
    'm_pap.jpg' : Images.m_pap,
    'm_pay.jpg' : Images.m_pay,
    'm_pep.jpg' : Images.m_pep,
    'm_per.jpg' : Images.m_per,
    'm_pin.jpg' : Images.m_pin,
    'm_pla.jpg' : Images.m_pla,
    'm_pul.jpg' : Images.m_pul,
    'm_ros.jpg' : Images.m_ros,
    'm_san.jpg' : Images.m_san,
    'm_sar.jpg' : Images.m_sar,
    'm_sof.jpg' : Images.m_sof,
    'm_sog.jpg' : Images.m_sog,
    'm_soy.jpg' : Images.m_soy,
    'm_tab.jpg' : Images.m_tab,
    'm_tom.jpg' : Images.m_tom,
    'm_tor.jpg' : Images.m_tor,
    'm_tri.jpg' : Images.m_tri,
    'm_uvf.jpg' : Images.m_uvf,
    'm_uvi.jpg' : Images.m_uvi,
    'm_uvp.jpg' : Images.m_uvp,
    'm_zar.jpg' : Images.m_zar,

    'media/t_aga.jpg' : Images.tr_aga,
    'media/t_agu.jpg' : Images.tr_agu,
    'media/t_ajo.jpg' : Images.tr_ajo,
    'media/t_alf.jpg' : Images.tr_alf,
    'media/t_alg.jpg' : Images.tr_alg,
    'media/t_ama.jpg' : Images.tr_ama,
    'media/t_ara.jpg' : Images.tr_ara,
    'media/t_arr.jpg' : Images.tr_arr,
    'media/t_atu.jpg' : Images.tr_atu,
    'media/t_avf.jpg' : Images.tr_avf,
    'media/t_avg.jpg' : Images.tr_avg,
    'media/t_ber.jpg' : Images.tr_ber,
    'media/t_bro.jpg' : Images.tr_bro,
    'media/t_cac.jpg' : Images.tr_cac,
    'media/t_caf.jpg' : Images.tr_caf,
    'media/t_cal.jpg' : Images.tr_cal,
    'media/t_cam.jpg' : Images.tr_cam,
    'media/t_can.jpg' : Images.tr_can,
    'media/t_car.jpg' : Images.tr_car,
    'media/t_cca.jpg' : Images.tr_cca,
    'media/t_ccb.jpg' : Images.tr_ccb,
    'media/t_ccc.jpg' : Images.tr_ccc,
    'media/t_cco.jpg' : Images.tr_cco,
    'media/t_ccp.jpg' : Images.tr_ccp,
    'media/t_ceb.jpg' : Images.tr_ceb,
    'media/t_ceg.jpg' : Images.tr_ceg,
    'media/t_chi.jpg' : Images.tr_chi,
    'media/t_col.jpg' : Images.tr_col,
    'media/t_cop.jpg' : Images.tr_cop,
    'media/t_dur.jpg' : Images.tr_dur,
    'media/t_esp.jpg' : Images.tr_esp,
    'media/t_fra.jpg' : Images.tr_fra,
    'media/t_fre.jpg' : Images.tr_fre,
    'media/t_fri.jpg' : Images.tr_fri,
    'media/t_gar.jpg' : Images.tr_gar,
    'media/t_ger.jpg' : Images.tr_ger,
    'media/t_gua.jpg' : Images.tr_gua,
    'media/t_hue.jpg' : Images.tr_hue,
    'media/t_jit.jpg' : Images.tr_jit,
    'media/t_lan.jpg' : Images.tr_lan,
    'media/t_leb.jpg' : Images.tr_leb,
    'media/t_lec.jpg' : Images.tr_lec,
    'media/t_leh.jpg' : Images.tr_leh,
    'media/t_lim.jpg' : Images.tr_lim,
    'media/t_maf.jpg' : Images.tr_maf,
    'media/t_mag.jpg' : Images.tr_mag,
    'media/t_man.jpg' : Images.tr_man,
    'media/t_maz.jpg' : Images.tr_maz,
    'media/t_mel.jpg' : Images.tr_mel,
    'media/t_mie.jpg' : Images.tr_mie,
    'media/t_moj.jpg' : Images.tr_moj,
    'media/t_nar.jpg' : Images.tr_nar,
    'media/t_nop.jpg' : Images.tr_nop,
    'media/t_nue.jpg' : Images.tr_nue,
    'media/t_pap.jpg' : Images.tr_pap,
    'media/t_pay.jpg' : Images.tr_pay,
    'media/t_pep.jpg' : Images.tr_pep,
    'media/t_per.jpg' : Images.tr_per,
    'media/t_pin.jpg' : Images.tr_pin,
    'media/t_pla.jpg' : Images.tr_pla,
    'media/t_pul.jpg' : Images.tr_pul,
    'media/t_ros.jpg' : Images.tr_ros,
    'media/t_san.jpg' : Images.tr_san,
    'media/t_sar.jpg' : Images.tr_sar,
    'media/t_sof.jpg' : Images.tr_sof,
    'media/t_sog.jpg' : Images.tr_sog,
    'media/t_soy.jpg' : Images.tr_soy,
    'media/t_tab.jpg' : Images.tr_tab,
    'media/t_tom.jpg' : Images.tr_tom,
    'media/t_tor.jpg' : Images.tr_tor,
    'media/t_tri.jpg' : Images.tr_tri,
    'media/t_uvf.jpg' : Images.tr_uvf,
    'media/t_uvi.jpg' : Images.tr_uvi,
    'media/t_uvp.jpg' : Images.tr_uvp,
    'media/t_zar.jpg' : Images.tr_zar,

    'Enero':      Images.ene,
    'Febrero':    Images.feb,
    'Marzo':      Images.mar,
    'Abril':      Images.abr,
    'Mayo':       Images.may,
    'Junio':      Images.jun,
    'Julio':      Images.jul,
    'Agosto':     Images.ago,
    'Septiembre': Images.sep,
    'Octubre':    Images.oct,
    'Noviembre':  Images.nov,
    'Diciembre':  Images.dic,

    'Estados Unidos': Images.us,
    'Belice': Images.bz,
    'China': Images.cn,
    'Cuba' : Images.cu,
    'Alemania' : Images.de,
    'Rep??blica Dominicana' : Images.do,
    'Francia' : Images.fr,
    'Italia' : Images.it,
    'Jap??n' : Images.jp,
    'Corea del Sur' : Images.kr,
    'M??xico' : Images.mx,
    'Turqu??a' : Images.tr,
    'Venezuela' : Images.ve,

    'infografia1': Images.infografia1,
    'infografia2': Images.infografia2,
    'infografia3': Images.infografia3,
    'infografia4': Images.infografia4,
    'infografia5': Images.infografia5,
    'infografia6': Images.infografia6,
    'infografia7': Images.infografia7,
    'infografia8': Images.infografia8,
    'infografia9': Images.infografia9,
    'infografia10': Images.infografia10,
    'infografia11': Images.infografia11,
    'infografia12': Images.infografia12,
    'infografia13': Images.infografia13,

    'info1': Images.info1,
    'info1_1': Images.info1_1,
    'info1_2': Images.info1_2,
    'info2': Images.info2,
    'info3': Images.info3,
    'info4': Images.info4,
    'info5': Images.info5,
    'info6': Images.info6,
    'info7': Images.info7,
    'info8': Images.info8,
    'info9': Images.info9,
    'info10': Images.info10,
    'info11': Images.info11,
    'info12': Images.info12,
    'info13': Images.info13,

}