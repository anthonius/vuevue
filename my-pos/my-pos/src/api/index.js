/*
import Vue from 'vue'
import VueResource from 'vue-resources'

Vue.use && Vue.use(VueResource)

function getDataViaApi (path, cb, errorHandler) {
  Vue.http.get(path, {
    headers: {
      'Cache-Control': 'no-cache'
    }
  }).then((res) => {
    cb(res)
  }, (error) => {
    if (typeof errorHandler === 'function') {
      errorHandler(error)
    }
  })
}
