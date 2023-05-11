import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext)

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const bookings = {
            customerName: name,
            email,
            date,
            img,
            service_id: _id,
            service: title,
            price: price

        }
        console.log(bookings)
        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    alert('sevice booked successfully')
                }
            })

    }

    return (
        <div>
            <h2>Booked NOw:{title}</h2>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="Date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" />
                    </div>

                </div>
                <div className=" form-control mt-6">
                    <input className="btn btn-primary btn-block " type="submit" value="Order Confirm" />
                </div>
            </form>

        </div>

    );
};

export default CheckOut;