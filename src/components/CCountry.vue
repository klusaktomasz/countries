<template>
  <article v-if="data">
    <img :src="data.flag" alt="">

    <header>
      <h1>{{ data.name }} <span>[{{ data.alpha3Code }}]</span></h1>
      <p>{{ data.altSpellings[2] }}</p>
    </header>

    <ul>
      <li>
        Capital: <b>{{ data.capital }}</b>, {{ data.region }}
      </li>
      <li>
        Language(s): {{ languages }}
      </li>
      <li>
        Currencie(s): {{ currencies }}
      </li>
      <li>
        Domain: {{ data.topLevelDomain[0] }}
      </li>
      <li>
        Borders: {{ data.borders.join(', ') || 'none' }}
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'CCountry',
  props: ['data'],
  computed: {
    currencies () {
      const currCodes = this.data.currencies.map(el => {
        return el.code;
      });

      return currCodes.join(', ');
    },

    languages () {
      const langaugeNames = this.data.languages.map(el => {
        return el.name;
      });

      return langaugeNames.join(', ');
    }
  }
}
</script>

<style scoped lang="scss">
article {
  width: 100%;
  max-width: 360px;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;

  border: none;
  border-radius: 4px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.24),
              0px 0px 8px rgba(0, 0, 0, 0.12);
}

.error {
  margin: 0;
  text-align: center;
}

img {
  display: block;
  margin-bottom: 20px;
  box-shadow: 0 0 3px #aaa;
  max-width: 320px;
  width: 100%;
}

ul {
  margin: 20px 0 0 0;
  padding: 0;
  list-style: none;
  line-height: 1.4em;
}

header {
  h1 {
    margin: 0;

    span {
      font-weight: 400;
    }
  }

  p {
    margin: 0;
    font-weight: 300;
    font-size: 0.8em;
  }
}
</style>
