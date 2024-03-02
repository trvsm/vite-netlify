export default function Post({ open, title, date, body }) {
  return open === "true" ? (
    <article>
      <details open>
        <summary>
          <h3>{title}</h3>
        </summary>
        <p>{date}</p>
        <p className="post__body">{body}</p>
      </details>
    </article>
  ) : (
    <article>
      <details>
        <summary>
          <h3>{title}</h3>
        </summary>
        <p>{date}</p>
        <p className="post__body">{body}</p>
      </details>
    </article>
  );
}
