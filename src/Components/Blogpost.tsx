import React from "react";

const Blogpost: React.FC = () => {
  return (
    <section className="blogpost">
      <h1>From the firehose</h1>

      <article>
        <h2>Sample blog post</h2>
        <span>
          April 1,2020 by <a href="https://material-ui.com/">Oliver</a>
        </span>
        <p>
          This blog post shows a few different types of content that are
          supported and styled with Material styles. Basic typography, images,
          and code are all supported. You can extend these by modifying
          Markdown.js.
        </p>
        <p>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
          quam venenatis vestibulum. Sed posuere consectetur est at lobortis.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
        <p>
          Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis
          ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
          elit.
        </p>
        <p>
          Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </p>
        <h3>Heading</h3>
        <p>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros.
        </p>
        <h4>Sub-heading</h4>
        <p>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus
        </p>
        <h4>Sub-heading</h4>
        <p>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
          porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
          cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus.
        </p>
        <ul>
          <li>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </li>
          <li>Donec id elit non mi porta gravida at eget metus.</li>
          <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <p>
          Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
          libero, a pharetra augue.
        </p>
        <ol>
          <li>Vestibulum id ligula porta felis euismod semper.</li>
          <li>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </li>
          <li>
            Maecenas sed diam eget risus varius blandit sit amet non magna.
          </li>
        </ol>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Sed posuere
          consectetur est at lobortis.
        </p>
      </article>

      <article>
        <h2>Another blog post</h2>
        <span>
          March 23,2020 by <a href="https://material-ui.com/">Math</a>
        </span>
        <p>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
          quam venenatis vestibulum. Sed posuere consectetur est at lobortis.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
        <p>
          Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis
          ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
          elit.
        </p>
        <p>
          Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </p>
        <p>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros.
        </p>
      </article>

      <article>
        <h2>New feature</h2>
        <span>
          March 14,2020 by <a href="https://material-ui.com/">Tom</a>
        </span>
        <p>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
          porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
          cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus.
        </p>
        <ol>
          <li>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </li>
          <li>Donec id elit non mi porta gravida at eget metus.</li>
          <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ol>
        <p>
          Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </p>
        <p>
          Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
          libero, a pharetra augue.
        </p>
      </article>
      
    </section>
  );
};

export default Blogpost;
