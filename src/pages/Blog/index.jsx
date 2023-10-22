import { BlogCard, BlogContent, BlogGrid, FootLine, Footer, Navbar, TitleCard } from "../../components"

export default function index() {
  return (
    <section>
      <Navbar />
      <TitleCard 
        title="Blog"
      />
      <div className="ml-[140px] flex mt-20 gap-24 mb-20">
        <BlogCard />
        <BlogContent />
      </div>
      <BlogGrid />
      <FootLine />
      <Footer />
    </section>
  )
}
