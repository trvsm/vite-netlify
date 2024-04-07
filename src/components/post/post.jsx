export default function Post({ open, title, date, body }) {
  return open === "true" ? (
    <article>
      <details open>
        <summary>
          <h3>{title}</h3>
        </summary>
        <p>{date}</p>
        <div
          className="post__body"
          dangerouslySetInnerHTML={{ __html: body }}
        ></div>
      </details>
    </article>
  ) : (
    <article>
      <details>
        <summary>
          <h3>{title}</h3>
        </summary>
        <p>{date}</p>
        <div
          className="post__body"
          dangerouslySetInnerHTML={{ __html: body }}
        ></div>
      </details>
    </article>
  );
}
