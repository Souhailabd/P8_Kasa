import PropTypes from 'prop-types'


function Banner({img, alt, title}) {
    return (
        <div className='banner'>
            <img src={img} alt={alt} className='banner-img' />
            <div className='banner-overlay'>
                <h1 className='banner-overlay-title'>{title}</h1>
            </div>
        </div>
    );
}  

Banner.propTypes = {
    img : PropTypes.string,
    alt : PropTypes.string,
    title : PropTypes.string,
}
export default Banner