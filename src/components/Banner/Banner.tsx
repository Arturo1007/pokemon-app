import styles from './banner.module.scss';

interface BannerProps {
  desktopImage: string,
  mobileImage: string
}

const Banner = (props: BannerProps) => {
  const {desktopImage, mobileImage } = props;

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerImageContainer}>
      <picture>
        <source media="(max-width:650px)" srcSet={mobileImage}/>
        <img src={desktopImage} alt="alt text"/>
      </picture>
      </div>
    </div>
  )
}

export default Banner