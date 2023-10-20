import { TitleCard, ContactForm, ContactSocialCard, Navbar } from "../../components";

export default function index() {
  return (
    <div>
      <Navbar />
      <TitleCard 
        title={"Contact"}
        titleDescription={"Lorem ipsum dolor sit amet consectetur. Id tortor amet aliquet vestibulum."}
      />
      <div className="flex mt-20 gap-32">
        <ContactSocialCard/>
        <ContactForm />
      </div>
    </div>
  )
}
