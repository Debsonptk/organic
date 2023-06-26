const Showing = () => (
    <div className="row justify-content-between pb-4 pt-5 border-bottom">
        <div className="col">
            <p>Showing 1 - 12 of 30 results</p>
        </div>
        <div className="col">
            <div className=" d-flex justify-content-end">
                <select className="border-0" id="inputGroupSelect01">
                    <option selected>Default sorting</option>
                    <option value="1">Sort by Popularity</option>
                    <option value="2">Sort by Newness</option>
                    <option value="3">Sort by Price: Low to High</option>
                    <option value="3">Sort by Price: High to Low</option>
                </select>
            </div>
        </div>
    </div>
);

export default Showing