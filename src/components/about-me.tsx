const AboutMe = () => {
  return (
    <article
      id="hero"
      className="flex justify-center flex-col m-auto mb-3 max-w-prose gap-5 min-h-[60vh]"
    >
      <h1 className="fade-in text-6xl sm:text-8xl font-semibold mb-5 tracking-tighter">
        Hello
        <span className="fade-in-out">o</span>
        <span className="fade-in-out-1">o</span>
        <span className="fade-in-out-2">o</span>
      </h1>
      <p className="fade-in-1 text-base">
        I'm Alice, A Software Engineer based in Melbourne, Australia.
      </p>
      <p className="fade-in-2">
        I'm currently working at{' '}
        <span className="font-bold">
          <a
            href="https://www.publicissapient.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PS
          </a>
        </span>{' '}
        where I contribute to projects in many industries including government,
        energy and retail.
      </p>
      <p className="fade-in-2">
        <span>
          Developing applications is my
          <a
            href="https://knowyourmeme.com/memes/graphic-design-is-my-passion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              className="font-bold bg-gradient-to-r from-red-500  via-yellow-500 to-lime-500 bg-clip-text text-transparent"
              style={{ fontStretch: 'extra-expanded' }}
            >
              {' '}
              passion
            </span>
          </a>
          .
        </span>{' '}
        I'm always exploring and constantly striving to improve my skills.
      </p>
      <p className="fade-in-2">
        I started my software engineering journey in 2021, by deciding to jump
        into the deep end with a bootcamp. Now I get to solve problems and
        create enjoyable web and mobile experiences for users, I couldn't feel
        luckier!
      </p>
      {/* <p className="fade-in-2"></p> */}
    </article>
  )
}

export default AboutMe
