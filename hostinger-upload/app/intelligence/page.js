export const metadata = { title: 'Intelligence — Choosing Well' };

export default function Page() {
  return (
    <section className="stub-page">
      <div className="wrap">
        <a className="back-link" href="/">&larr; Back to Choosing Well</a>
        <span className="eyebrow">Intelligence</span>
        <h1>Better choices need better information.</h1>
        <p className="lede">
          For years, I have seen students navigate complex decisions about what and where to
          study, associated costs, and potential outcomes. While this information is available,
          its abundance often creates a paradox of choice, making it difficult to compare options
          and sometimes disconnecting it from the real decisions students and families face.
        </p>
        <div className="page-copy">
          <p>This challenge inspired me to build Knowmatrix.</p>
          <p>
            Knowmatrix consolidates insights across Course, College, Career, Country, and Cost,
            while developing in-depth knowledge in key education and career areas. I define the
            strategic direction by identifying essential information, organising it, prioritising
            research, and ensuring its value to students, institutions, and education partners.
          </p>
          <p>
            Our insights also connect students with suitable programs, institutions, and specialist
            service providers when they need personalised support.
          </p>
          <p>
            In many ways, Knowmatrix transforms years of individual student conversations into
            systems and knowledge that benefit a wider audience.
          </p>
          <a className="btn btn-solid page-cta" href="https://knowmatrix.com" target="_blank" rel="noreferrer">
            Visit Knowmatrix
          </a>
        </div>
      </div>
    </section>
  );
}
