var mappingUrl = {
  baseUrl: 'http://127.0.0.1:8080/baseUrl',
  user: 'http://127.0.0.1:8080/user',
  qa: 'http://127.0.0.1:8080/qa',
  news: ' http://172.16.30.19:9010/mcs/',
  meeting: 'http://127.0.0.1:8080/news',
  followUp: 'http://127.0.0.1:8080/followUp',
  wx: 'http://127.0.0.1:8080/wx'
}
sessionStorage.setItem('rootMappingUrl', JSON.stringify(mappingUrl))
