import React from 'react';
import "./JudgePage.css";
import {Judge} from "./Judge"
export const JudgePage = () =>{

    return(
        <div className="judge-page">
            <div className="explanation-container" style={{width:"100%"}}>
                <span className="purple-header">60+ users with our judge badge</span>
                <span className="explanation-header">Meet our judge users</span>
                <div className="swirl">
                </div><div className="logo-container">
                    <div className="logo-row" style={{marginTop:"2rem"}}>
                        <Judge name={'Kyle Martin'} src={`kyle_martin.jpg`}></Judge>
                        <Judge name={'Aziz Ahmed'} src={`aziz_ahmed.jpg`}></Judge>
                        <Judge name={'Richard Hpa'} src={`richard_hpa.jpg`}></Judge>
                        <Judge name={'Grayson Orr'} src={`grayson_orr.jpg`}></Judge>
                        <Judge name={'Rushabh Master'} src={`rushabh_master.jpg`}>></Judge>
                        <Judge name={'Sherif Gayed'} src={`sherif_gayed.jpg`}></Judge>
                        <Judge name={'Giles Thompson'} src={`giles_thompson.jpg`}></Judge>
                        <Judge name={'Tony liu'} src={`tony_liu.jpg`}></Judge>
                    </div>
                    <div className="logo-row" style={{paddingLeft:'5rem',marginTop:"2rem"}}>
                        <Judge name={'Sam Alhambra'} src={`sam_alhambra.jpg`}></Judge>
                        <Judge name={'Darshit Pandya'} src={`darshit_pandya.jpg`}></Judge>
                        <Judge name={'Charu Matta'} src={`charu_matta.jpg`}></Judge>
                        <Judge name={'Walaa Elzayady'} src={`walaa_elzayady.jpg`}></Judge>
                        <Judge name={'Tien Ngyuyen Khac'} src={`tien_nguyen_khac.jpg`}></Judge>
                        <Judge name={'Akshay Raj'} src={`akshay_raj_gollahalli.jpg`}></Judge>
                        <Judge name={'Feng Guo'} src={`feng_guo.png`}></Judge>
                        <Judge name={'Ayush Narula'} src={`ayush_narula.jpg`}></Judge>
                    </div>
                    <div className="logo-row" style={{marginTop:"2rem"}}>
                        <Judge name={'Divay Shrivastav'} src={`divay_shrivastav.jpg`}></Judge>
                        <Judge name={'Daniel Munn'} src={`daniel_munn.jpg`}></Judge>
                        <Judge name={'Cheng Zhen Yang'} src={`cheng_zhen_yang.png`}></Judge>
                        <Judge name={'Hiruna Jayamanne'} src={`hiruna_jayamanne.jpg`}></Judge>
                        <Judge name={'Philip Dolbel'} src={`philip_dolbel.png`}></Judge>
                        <Judge name={'Ratha Long'} src={`ratha_long.jpg`}></Judge>
                        <Judge name={'Rey Vincent'} src={`rey_vincent_babilonia.png`}></Judge>
                        <Judge name={'Jianbin Chen'} src={`jianbin_chen.jpg`}></Judge>
                    </div>
                    <div className="logo-row" style={{marginTop:"2rem"}}>
                        <Judge name={'Patrick Tan'} src={`patrick_tan.jpg`}></Judge>
                        <Judge src={`more.jpg`}></Judge>
                    </div>
            </div>
            </div>
        </div>
    )
}