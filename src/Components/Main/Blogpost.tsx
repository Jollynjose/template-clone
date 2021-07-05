import React from "react";
import classes from './Blogspot.module.css'

const Blogpost: React.FC = () => {
  return (
    <section className={classes.container}>
      <h1 className={classes.primary_title}>From the firehose</h1>
      <article className={classes.article}>
        <h2 className={classes.secundary_title}>Sample blog post</h2>
        <span className={classes.info}>
          April 1,2020 by <a href="https://material-ui.com/" className={classes.author}>Oliver</a>
        </span>
        <p className={classes.paragraph}>
          This blog post shows a few different types of content that are
          supported and styled with Material styles. Basic typography, images,
          and code are all supported. You can extend these by modifying
          Markdown.js.
        </p>
        <p className={classes.paragraph}>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
          quam venenatis vestibulum. Sed posuere consectetur est at lobortis.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
        <p className={classes.paragraph}>
          Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis
          ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
          elit.
        </p>
        <p className={classes.paragraph}>
          Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </p>
        <h3 className={classes.heading}>Heading</h3>
        <p className={classes.paragraph}>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros.
        </p>
        <h4 className={classes.subtitle}>Sub-heading</h4>
        <p className={classes.paragraph}>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus
        </p>
        <h4 className={classes.subtitle}>Sub-heading</h4>
        <p className={classes.paragraph}>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
          porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
          cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus.
        </p>
        <ul className={classes.unorder}>
          <li>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </li>
          <li>Donec id elit non mi porta gravida at eget metus.</li>
          <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <p className={classes.paragraph}>
          Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
          libero, a pharetra augue.
        </p>
        <ol className={classes.order}>
          <li>Vestibulum id ligula porta felis euismod semper.</li>
          <li>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </li>
          <li>
            Maecenas sed diam eget risus varius blandit sit amet non magna.
          </li>
        </ol>
        <p className={classes.paragraph}>
          Cras mattis consectetur purus sit amet fermentum. Sed posuere
          consectetur est at lobortis.
        </p>
      </article>

      <article className={classes.article}>
        <h2 className={classes.secundary_title}>Another blog post</h2>
        <span className={classes.info}>
          March 23,2020 by <a href="https://material-ui.com/" className={classes.author}>Math</a>
        </span>
        <p className={classes.paragraph}>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
          quam venenatis vestibulum. Sed posuere consectetur est at lobortis.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
        <p className={classes.paragraph}>
          Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis
          ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
          elit.
        </p>
        <p className={classes.paragraph}>
          Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </p>
        <p className={classes.paragraph}>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros.
        </p>
      </article>

      <article className={classes.except}>
        <h2 className={classes.secundary_title}>New feature</h2>
        <span className={classes.info}>
          March 14,2020 by <a href="https://material-ui.com/" className={classes.author}>Tom</a>
        </span>
        <p className={classes.paragraph}>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
          porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
          cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus.
        </p>
        <ol className={classes.order}>
          <li>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </li>
          <li>Donec id elit non mi porta gravida at eget metus.</li>
          <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ol>
        <p className={classes.paragraph}>
          Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </p>
        <p className={classes.paragraph}>
          Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
          libero, a pharetra augue.
        </p>
      </article>
    </section>
  );
};

export default Blogpost;
