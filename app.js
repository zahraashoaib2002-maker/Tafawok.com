function openWhatsApp(e){
  e?.preventDefault?.();
  const phone="96170796137";
  const appUrl=`whatsapp://send?phone=${phone}`;
  const webUrl=`https://wa.me/${phone}`;
  window.location.href=appUrl;
  setTimeout(()=>{window.location.href=webUrl},800);
}
function openInstagram(e){
  e?.preventDefault?.();
  const user="tafawok_edu_center.lb";
  const appUrl=`instagram://user?username=${user}`;
  const webUrl="https://www.instagram.com/tafawok_edu_center.lb";
  window.location.href=appUrl;
  setTimeout(()=>{window.location.href=webUrl},800);
}
