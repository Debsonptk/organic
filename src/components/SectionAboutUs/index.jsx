import harvest1 from "../../assets/harvest1.jpeg"
import harvest2 from "../../assets/harvest2.jpeg"

const SectionAboutUs = () => (
    <div className="container pt-5 pb-5">
        <div className="row row-cols-1 row-cols-lg-2 g-0">
            <div className="col d-flex justify-content-end">
                <img src={harvest1} alt="harvest" className="img-fluid"/>
            </div>
            <div className="col p-3">
                <h2 className="">Who We Are</h2>
                <h5 className="text-success ">________</h5>
                <p className="">We are a manufacturing base of organic food produced on our farm. We are a family health care production team, created by today s need for clean and safe food, driven by the desire to build meaningful and meaningful experiences. Vivamus et enim accumsan, tempus dui non, pretium libero. Vivamus vitae justo non metus malesuada finibus. Pellentesque vehicula porttitor eleifend. Proin eget velit in arcu consectetur tempor. Sed pulvinar, purus sed efficitur elementum, risus risus tincidunt massa, a iaculis risus turpis id sapien. Pellentesque a metus urna. Integer placerat et ante quis pharetra. Nulla facilisi. Donec egestas tortor non ante pulvinar, sit amet sollicitudin nisl auctor. Vestibulum aliquet finibus consectetur. Nullam faucibus vehicula est nec pulvinar.</p>
            </div>
            <div className="col p-3">
                <h2 className=" text-end">What We Do</h2>
                <h5 className="text-success text-end ">________</h5>
                <p className=" text-end">We provide all kinds of organic products. Produced on our farm, the products are always fresh, multi-vitamins, rich variety for your family. With our organic food will bring delicious meals to your family.</p>
                <p className=" text-end">Vestibulum eu nisl vitae tortor feugiat aliquet finibus in libero. Vivamus et enim accumsan, tempus dui non, pretium libero. Vivamus vitae justo non metus malesuada finibus. Pellentesque vehicula porttitor eleifend. Proin eget velit in arcu consectetur tempor. Sed pulvinar, purus sed efficitur elementum, risus risus tincidunt massa, a iaculis risus turpis id sapien diam pellentesque ullamcorper.</p>
            </div>
            <div className="col">
                <img src={harvest2} alt="harvest" className="img-fluid"/>
            </div>
        </div>
    </div>
);

export default SectionAboutUs;