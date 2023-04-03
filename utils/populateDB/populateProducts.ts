import axios from 'axios'
import prisma from '../prisma/lib/prisma'
import { Category } from '../enums/category'
import { Case, CaseFan, Product, CPU, CPUFan, GPU, Keyboard, Motherboard, Mouse, PowerSupply, RAM, Storage } from '../types/product'
import { RAPIDAPIENDPOINTS } from '../enums/rapidapiendpoints'
import { data } from './testData'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

export const populateProducts = async (componentType: RAPIDAPIENDPOINTS, categoryId: Category) => {
  const options = {
    method: 'GET',
    url: `https://computer-components-api.p.rapidapi.com/${componentType}`,
    params: { limit: '10', offset: '0' },
    headers: {
      'X-RapidAPI-Key': '391504d87dmsh7c214d86f6bbc04p1cfeb2jsn9caf616b3cc6',
      'X-RapidAPI-Host': 'computer-components-api.p.rapidapi.com',
    },
  }

  const shipped_by = ['NewEgg', 'BestBuy', 'Walmart', 'Amazon', 'Microcenter']

  try {
    const { data } = await axios.request(options)
    console.log(`Adding ${componentType}`)

    const startDate = new Date(2020, 0, 1)
    const endDate = new Date()

    data.map(async (component: Product) => {
      try {
        await prisma.product.create({
          data: {
            productId: component.id,
            name: component.model,
            full_name: component.title,
            manufacturer: component.brand,
            stock: Math.floor(Math.random() * 10),
            shipped_by: shipped_by[Math.floor(Math.random() * shipped_by.length)],
            free_shipping: Math.random() > 0.5 ? true : false,
            price: component.price,
            discount: Math.floor(Math.random() * 15),
            reviews: Math.floor(Math.random() * 1000),
            stars: Math.floor(Math.random() * 5),
            img: component.img,
            release_date: new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())),
            categoryId: categoryId,
          },
        })
      } catch (error) {
        console.log(error)
      }
    })

    // Wait for DB to finish creating Product records
    console.log('Waiting 15s to add Specs')
    await delay(15000)
    console.log('Adding Specs')

    switch (componentType) {
      case 'power_supply':
        data.map(async (component: PowerSupply) => {
          try {
            await prisma.powerSupplySpecs.create({
              data: {
                power: component.power,
                color: component.color,
                efficiency: component.efficiency,
                productId: component.id,
              },
            })
          } catch (error) {
            console.log(error)
          }
        })
        break
      case 'case_fan':
        data.map(async (component: CaseFan) => {
          try {
            await prisma.caseFanSpecs.create({
              data: {
                rpm: component.rpm,
                air_flow: component.airFlow,
                noise_level: component.noiseLevel,
                productId: component.id,
              },
            })
          } catch (error) {
            console.log(error)
          }
        })
        break
      case 'ram':
        data.map(async (component: RAM) => {
          try {
            await prisma.rAMSpecs.create({
              data: {
                size: component.size,
                quantity: component.quantity,
                type: component.type,
                productId: component.id,
              },
            })
          } catch (error) {
            console.log(error)
          }
        })
        break
      case 'mouse':
        data.map(async (component: Mouse) => {
          try {
            await prisma.mouseSpecs.create({
              data: {
                track_method: component.trackingMethod,
                color: component.color,
                wireless: component.wireless,
                productId: component.id,
              },
            })
          } catch (error) {
            console.log(error)
          }
        })
        break
      case 'keyboard':
        data.map(async (component: Keyboard) => {
          try {
            await prisma.keyboardSpecs.create({
              data: {
                style: component.style,
                backlit: component.backlit,
                color: component.color,
                wireless: component.wireless,
                productId: component.id,
              },
            })
          } catch (error) {
            console.log(error)
          }
        })
        break
      case 'cpu_fan':
        data.map(async (component: CPUFan) => {
          try {
            await prisma.cPUFanSpecs.create({
              data: {
                rpm: component.rpm,
                color: component.color,
                noise_level: component.noiseLevel,
                productId: component.id,
              },
            })
          } catch (error) {
            console.log(error)
          }
        })
        break
      case 'case':
        data.map(async (component: Case) => {
          try {
            await prisma.caseSpecs.create({
              data: {
                side_panel: component.sidePanel,
                color: component.color,
                cabinet_type: component.cabinetType,
                productId: component.id,
              },
            })
          } catch (error) {
            console.log(error)
          }
        })
        break
      case 'storage':
        data.map(async (component: Storage) => {
          try {
            await prisma.storageSpecs.create({
              data: {
                storage_interface: component.storageInterface,
                rpm: component.rpm,
                type: component.type,
                cache_memory: component.cacheMemory,
                productId: component.id,
              },
            })
          } catch (error) {
            console.log(error)
          }
        })
        break
      case 'processor':
        data.map(async (component: CPU) => {
          try {
            await prisma.cPUSpecs.create({
              data: {
                socket: component.socketType,
                cores: Math.floor(Math.random() * 16) + 4,
                base_clock: parseFloat(component.speed.split(' ')[0]),
                boost_clock: parseFloat(component.speed.split(' ')[0]) + 0.4,
                l3_cache: Math.random() > 0.5 ? 32 : 64,
                tdp: Math.floor(Math.random() * 100) + 75,
                integrated_graphics: Math.random() > 0.5 ? true : false,
                productId: component.id,
              },
            })
          } catch (error) {
            console.log(error)
          }
        })
        break
      case 'gpu':
        data.map(async (component: GPU) => {
          try {
            await prisma.gPUSpecs.create({
              data: {
                storage_interface: component.storageInterface,
                memory: component.memory,
                clock_speed: component.clockSpeed,
                productId: component.id,
              },
            })
          } catch (error) {
            console.log(error)
          }
        })
        break
      case 'motherboard':
        data.map(async (component: Motherboard) => {
          try {
            await prisma.motherboardSpecs.create({
              data: {
                form_factor: component.formFactor,
                memory_slots: component.memorySlots,
                socket_type: component.socketType,
                productId: component.id,
              },
            })
          } catch (error) {
            console.log(error)
          }
        })
        break
    }
  } catch (error) {
    console.error(error)
  }
}

//run npx ts-node populateProducts.ts
const executePopulateProducts = async () => {
  await populateProducts(RAPIDAPIENDPOINTS.POWERSUPPLY, Category.POWERSUPPLY)
  await populateProducts(RAPIDAPIENDPOINTS.CASEFAN, Category.CASEFAN)
  await populateProducts(RAPIDAPIENDPOINTS.RAM, Category.RAM)
  await populateProducts(RAPIDAPIENDPOINTS.MOUSE, Category.MOUSE)
  await populateProducts(RAPIDAPIENDPOINTS.KEYBOARD, Category.KEYBOARD)

  // API rate limit is 5 requests per minute
  console.log('Rate limit reached. Waiting 1 minute.')
  await delay(60000)

  await populateProducts(RAPIDAPIENDPOINTS.CPUFAN, Category.CPUFAN)
  await populateProducts(RAPIDAPIENDPOINTS.CASE, Category.CASE)
  await populateProducts(RAPIDAPIENDPOINTS.STORAGE, Category.STORAGE)
  await populateProducts(RAPIDAPIENDPOINTS.PROCESSOR, Category.PROCESSOR)
  await populateProducts(RAPIDAPIENDPOINTS.GPU, Category.GPU)

  console.log('Rate limit reached. Waiting 1 minute.')
  await delay(60000)

  await populateProducts(RAPIDAPIENDPOINTS.MOTHERBOARD, Category.MOTHERBOARD)
}

executePopulateProducts()
