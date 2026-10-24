import Cover from "../components/Cover";
import ProjectArt from "../components/ProjectArt";
import {
  BulletList,
  Callout,
  RecordTable,
  SectionHeading,
  Tag,
  Tags,
  Toggle,
  ViewBar,
} from "../components/Blocks";
import { about, education, experience, extracurricular, profile, projects, sections, skills } from "../data/profile";
import writing from "../content/writing.json";
import { formatDate } from "../content/formatDate";

const section = Object.fromEntries(sections.map((s) => [s.id, s]));

function Heading({ id }) {
  return (
    <SectionHeading id={id} emoji={section[id].emoji}>
      {section[id].label}
    </SectionHeading>
  );
}

export default function HomePage() {
  const withHighlights = projects.filter((p) => p.highlights.length);

  return (
    <>
      <Cover />
      <div className="column">
        <div className="page-icon" role="img" aria-label="Wave">{profile.icon}</div>
        <h1 className="page-title">{profile.name}</h1>
        <p className="page-subtitle">{profile.subtitle}</p>

        <dl className="props">
          <dt><span className="glyph">◎</span>Location</dt>
          <dd>{profile.location}</dd>
          <dt><span className="glyph">◉</span>Status</dt>
          <dd><Tag label="● Open to opportunities" color="blue" /></dd>
          <dt><span className="glyph">≡</span>Focus</dt>
          <dd><Tags tags={profile.focus} /></dd>
        </dl>

        <hr className="divider" />

        <Heading id="about" />
        <Callout icon="💡">{about.callout}</Callout>
        {about.paragraphs.map((p) => (
          <p className="p" key={p}>{p}</p>
        ))}

        <Heading id="projects" />
        <ViewBar views={["▦ Gallery"]} count={`${projects.length} projects`} />
        <div className="gallery">
          {projects.map((p) => (
            <article className="card" key={p.title}>
              <ProjectArt kind={p.art} />
              <div className="card-body">
                <div className="card-title">{p.emoji} {p.title}</div>
                <div className="card-desc">{p.description}</div>
                <Tags tags={p.tags} />
                <div className="card-links">
                  {p.links.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noreferrer">{l.label} ↗</a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: "var(--space-3)" }}>
          {withHighlights.map((p) => (
            <Toggle key={p.title} summary={`${p.title}: highlights`}>
              <BulletList items={p.highlights} />
            </Toggle>
          ))}
        </div>

        <Heading id="experience" />
        <RecordTable records={experience} />

        <Heading id="extracurricular" />
        <RecordTable records={extracurricular} secondColumn="Organisation" />

        <Heading id="education" />
        <RecordTable records={education} firstColumn="Course" secondColumn="Institution" />

        <Heading id="skills" />
        <dl className="props" style={{ marginTop: 0 }}>
          {skills.map((s) => (
            <div key={s.group} style={{ display: "contents" }}>
              <dt><span className="glyph">≡</span>{s.group}</dt>
              <dd><Tags tags={s.items.map((label) => ({ label, color: s.color }))} /></dd>
            </div>
          ))}
        </dl>

        <Heading id="writing" />
        {writing.posts.length === 0 ? (
          <Callout icon="✍️">
            Notes on building software, teaching and running student societies are on the way.
          </Callout>
        ) : (
          <ul className="writing">
            {writing.posts.map((post) => (
              <li key={post.slug}>
                <span aria-hidden="true">{post.icon ?? "📄"}</span>
                <span>
                  <a href={`#/writing/${post.slug}`}>{post.title}</a>
                  {post.summary && <span className="caption summary">{post.summary}</span>}
                </span>
                <span className="caption date">{formatDate(post.date)}</span>
              </li>
            ))}
          </ul>
        )}

        <Heading id="contact" />
        <Callout icon="☕" color="blue">
          Always happy to chat about web development, tutoring or student societies. Email is the fastest way to reach me.
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.github.url} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin.url} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </Callout>

        <div className="foot caption">Made in Sydney · © {new Date().getFullYear()} {profile.name}</div>
      </div>
    </>
  );
}
