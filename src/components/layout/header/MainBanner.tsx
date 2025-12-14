import Main from "../Main";

export default function MainBanner({fixed}: {fixed:boolean}) {
    
    return (
        <div className={`main_banner${fixed ? '--fixed':''}`} id="main_banner">
            <span id="main_banner_left">&#643;</span>
            <span id="main_banner_right1">prachvertraut</span>
            <span id="main_banner_right2">{'>_'}</span>       
        </div>
    );


}

