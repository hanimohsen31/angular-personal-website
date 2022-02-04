import { ServicesCard } from "../ServicesCard";
import "./Services.css";

export const Services = (props) => {
  const desc1 =
    "القيام بالاعمال الابداعية فى التصميم الداخلي بما يتناسب مع احتاجاتك و ذوقك الخاص";
  const desc2 =
    "القيام بتنفيذ الاثاث و الفرش الخاص بكم والمناسب لذوقكم الفريد بافضل الاسعار وباعلي جودة";
  const desc3 =
    "تنفيذ اعمال التشطيبات الداخلية بافضل جودة مع ضمان لاعمالنا وافضل الاسعار الموجودة فى السوق ";
  return (
    <>
      <div className="Services container">
        <h1>A few things We are Great At</h1>
        <p className="ServicesDes col-10 col-lg-8">
          You may ask why us ? Ok , it's Simple as you can preview all of our on
          Here , on&#160;
          <a
            href="https://www.instagram.com/Hanimohsen31/"
            rel="noreferrer"
            target="_blank"
          >
            Insta
          </a>
          ,&#160;
          <a
            href="https://www.behance.net/hanimohsen3810"
            rel="noreferrer"
            target="_blank"
          >
            Behance
          </a>
          , Or On Our page on{" "}
          <a
            href="https://www.facebook.com/Collection2050"
            rel="noreferrer"
            target="_blank"
          >
            Facebook
          </a>
          &#160;to make sure you are in the Right Place to make your dreaming
          Design Come Alife.
        </p>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4">
          <ServicesCard
            img={props.img1}
            title="Interior Design"
            desc={desc1}
            contact="https://wa.me/201116886029"
          />
          <ServicesCard
            img={props.img2}
            title="Furnuture Making"
            desc={desc2}
            contact="https://wa.me/201011157972"
          />
          <ServicesCard
            img={props.img3}
            title="Finishing Works"
            desc={desc3}
            contact="https://wa.me/201011157972"
          />
        </div>
      </div>
    </>
  );
};
