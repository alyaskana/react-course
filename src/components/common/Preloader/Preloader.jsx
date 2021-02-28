import s from './Preloader.module.css';
let Preloader = () => {
  return (
    <div class={s.lds_spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}

export default Preloader