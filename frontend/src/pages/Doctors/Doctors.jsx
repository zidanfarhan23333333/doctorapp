import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/Doctors/DoctorCard";
import TestimoniList from "../../components/Testimoni/TestimoniList";

const Doctors = () => {
  return (
    <>
      {/* Section for Searching Doctors */}
      <section className="bg-[#fff9ea] py-8">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-6 mx-auto bg-[#0066ff2c] rounded-md flex items-center">
            <input
              type="search"
              className="py-2 pl-4 pr-2 bg-transparent w-full border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500"
              placeholder="Search Doctor"
            />
            <button className="btn mt-0 rounded-r-md">Search</button>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-6">
            {doctors.length > 0 ? (
              doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No doctors available
              </p>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="xl-w[470px] mx-auto">
          <h2 className="heading text-center">What Our patinet say</h2>
          <p className="text__para text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eligendi corrupti at natus et veniam?
          </p>
        </div>

        <TestimoniList />
      </section>
    </>
  );
};

export default Doctors;
