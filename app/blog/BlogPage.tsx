import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";
import {
  Eyebrow,
  H2,
  Sub,
  Section,
  Container,
} from "@/components/ui";
import { C, grad, gradLight, headingFont, bodyFont } from "@/lib/brand";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <section className="pt-32 pb-20 px-6" style={{ background: grad }}>
        <Container>
          <div className="text-center">
            <Eyebrow><BookOpen size={11} aria-hidden /> Blog</Eyebrow>
            <H2 light>Insights for Pakistani Businesses</H2>
            <Sub light>Practical guides on ERP, distribution, inventory, and business management for Pakistani SMEs.</Sub>
          </div>
        </Container>
      </section>
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block h-full rounded-2xl overflow-hidden group transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: "white", border: `1px solid ${C.cardBorder}` }}
                >
                  <div className="h-36 flex items-center justify-center" style={{ background: i % 3 === 0 ? gradLight : i % 3 === 1 ? "#F0FDF4" : "#FFF7ED" }}>
                    <BookOpen size={32} color={C.blue} aria-hidden />
                  </div>
                  <div className="p-5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold mb-3" style={{ background: "#EFF4FF", color: C.blue, fontFamily: bodyFont }}>
                      {post.cat}
                    </span>
                    <h2 className="font-bold mb-3 leading-snug" style={{ color: C.nearBlack, fontFamily: headingFont, fontSize: 15 }}>{post.title}</h2>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: C.slate, fontFamily: bodyFont, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{post.intro}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: C.slate, fontFamily: bodyFont }}>{post.date} · {post.read}</span>
                      <span className="text-xs font-semibold flex items-center gap-0.5" style={{ color: C.blue, fontFamily: bodyFont }}>Read <ChevronRight size={12} aria-hidden /></span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
