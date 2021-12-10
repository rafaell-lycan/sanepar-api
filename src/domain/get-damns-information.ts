import got from 'got'
import cheerio from 'cheerio'
import { format, parse } from 'date-fns'

const BASE_URL = 'https://site.sanepar.com.br/'

const SINGLE_TYPE = 'single'
const SYSTEM_TYPE = 'system'

type SystemType = typeof SINGLE_TYPE | typeof SYSTEM_TYPE

interface DamsInformation {
  date: string
  dams: Dam[]
}

interface Dam {
  name: string
  level: string
  value: number
  type: SystemType
}

function convertDate(date: string) {
  const fromPattern = 'dd/MM/yyyy - HH:mm'
  const toPattern = 'yyyy/MM/dd HH:mm'

  return format(parse(date, fromPattern, new Date()), toPattern)
}

const getDamnsInformation = async (): Promise<DamsInformation> => {
  const data = await got.get(BASE_URL)
  const $ = cheerio.load(data.body)

  const dams: Dam[] = []

  // find dams
  $('.views-field-field-nivel-reserv-icone-fid').each((i, el) => {
    const $parent = $(el).parent();

    const name = $parent.find('.views-field-title').text().trim()
    const level = $parent.find('.views-field-body').text().trim()
    const value = parseFloat(level.replace('%', '').replace(',', '.'))
    const type = name.toLowerCase().includes('total') ? SYSTEM_TYPE : SINGLE_TYPE

    dams.push({name, level, value, type})
  })

  // find updated at "Atualizado em: DD/MM/YYYY - hh:mm"
  let date = $('.nivel-reserv-data').text()
  date = convertDate(date.replace('Atualizado em:', '').trim())

  return { date , dams }
}

export default getDamnsInformation
