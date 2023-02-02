import axios from 'axios'
import prisma from '../prisma/lib/prisma'
import { Category } from '../enums/category'
import { Case, CaseFan, Component, CPU, CPUFan, GPU, Keyboard, Motherboard, Mouse, PowerSupply, RAM } from '../types/Components'
import { RAPIDAPIENDPOINTS } from '../enums/rapidapiendpoints'

export const populateProducts = async (componentType: RAPIDAPIENDPOINTS, category_id: Category) => {
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
    console.log(data)

    const startDate = new Date(2020, 0, 1)
    const endDate = new Date()

    data.map(async (component: Component) => {
      try {
        await prisma.product.create({
          data: {
            id: component.id,
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
            category_id: category_id,
          },
        })
      } catch (error) {}
    })

    switch (componentType) {
      case 'power_supply':
        data.map(async (component: PowerSupply, index: number) => {
          try {
            await prisma.powerSupplySpecs.create({
              data: {
                power: component.power,
                color: component.color,
                efficiency: component.efficiency,
                product_id: component.id,
              },
            })
          } catch (error) {}
        })
        break
      //   case 'case_fan':
      //     data.map(async (component: CaseFan) => {
      //       try {
      //         await prisma.caseFanSpecs.create({
      //           data: {
      //             rpm: component.rpm,
      //             air_flow: component.air_flow,
      //             noise_level: component.noise_level,
      //             product_id: component.id,
      //           },
      //         })
      //       } catch (error) {}
      //     })
      //     break
      //   case 'ram':
      //     data.map(async (component: RAM) => {
      //       try {
      //         await prisma.rAMSpecs.create({
      //           data: {
      //             size: component.size,
      //             quantity: component.quantity,
      //             type: component.type,
      //             product_id: component.id,
      //           },
      //         })
      //       } catch (error) {}
      //     })
      //     break
      //   case 'mouse':
      //     data.map(async (component: Mouse) => {
      //       try {
      //         await prisma.mouseSpecs.create({
      //           data: {
      //             track_method: component.track_method,
      //             color: component.color,
      //             wireless: component.wireless,
      //             product_id: component.id,
      //           },
      //         })
      //       } catch (error) {}
      //     })
      //     break
      //   case 'keyboard':
      //     data.map(async (component: Keyboard) => {
      //       try {
      //         await prisma.keyboardSpecs.create({
      //           data: {
      //             style: component.style,
      //             backlit: component.backlit,
      //             color: component.color,
      //             wireless: component.wireless,
      //             product_id: component.id,
      //           },
      //         })
      //       } catch (error) {}
      //     })
      //     break
      //   case 'cpu_fan':
      //     data.map(async (component: CPUFan) => {
      //       try {
      //         await prisma.cPUFanSpecs.create({
      //           data: {
      //             rpm: component.rpm,
      //             color: component.color,
      //             noise_level: component.noise_level,
      //             product_id: component.id,
      //           },
      //         })
      //       } catch (error) {}
      //     })
      //     break
      //   case 'case':
      //     data.map(async (component: Case) => {
      //       try {
      //         await prisma.caseSpecs.create({
      //           data: {
      //             side_panel: component.side_panel,
      //             color: component.color,
      //             cabinet_type: component.cabinet_type,
      //             product_id: component.id,
      //           },
      //         })
      //       } catch (error) {}
      //     })
      //     break
      //   case 'storage':
      //     data.map(async (component: Storage) => {
      //       try {
      //         await prisma.storageSpecs.create({
      //           data: {
      //             storage_interface: component.storage_interface,
      //             rpm: component.rpm,
      //             type: component.type,
      //             cache_memory: component.cache_memory,
      //             product_id: component.id,
      //           },
      //         })
      //       } catch (error) {}
      //     })
      //     break
      //   case 'processor':
      //     data.map(async (component: CPU) => {
      //       try {
      //         await prisma.cPUSpecs.create({
      //           data: {
      //             socket: component.socketType,
      //             cores: Math.floor(Math.random() * 16) + 4,
      //             base_clock: parseFloat(component.speed.split(' ')[0]),
      //             boost_clock: parseFloat(component.speed.split(' ')[0]) + 0.4,
      //             l3_cache: Math.random() > 0.5 ? 32 : 64,
      //             tdp: Math.floor(Math.random() * 100) + 75,
      //             integrated_graphics: Math.random() > 0.5 ? true : false,
      //             product_id: component.id,
      //           },
      //         })
      //       } catch (error) {}
      //     })
      //     break
      //   case 'gpu':
      //     data.map(async (component: GPU) => {
      //       try {
      //         await prisma.gPUSpecs.create({
      //           data: {
      //             storage_interface: component.storage_interface,
      //             memory: component.memory,
      //             clock_speed: component.clock_speed,
      //             product_id: component.id,
      //           },
      //         })
      //       } catch (error) {}
      //     })
      //     break
      //   case 'motherboard':
      //     data.map(async (component: Motherboard) => {
      //       try {
      //         await prisma.motherboardSpecs.create({
      //           data: {
      //             form_factor: component.form_factor,
      //             memory_slots: component.memory_slots,
      //             socket_type: component.socket_type,
      //             product_id: component.id,
      //           },
      //         })
      //       } catch (error) {}
      //     })
      //     break
    }
  } catch (error) {
    console.error(error)
  }
}

//run npx ts-node populateProducts.ts
populateProducts(RAPIDAPIENDPOINTS.POWERSUPPLY, Category.POWERSUPPLY)
// populateProducts(RAPIDAPIENDPOINTS.CASEFAN, Category.CASEFAN)
// populateProducts(RAPIDAPIENDPOINTS.RAM, Category.RAM)
// populateProducts(RAPIDAPIENDPOINTS.MOUSE, Category.MOUSE)
// populateProducts(RAPIDAPIENDPOINTS.KEYBOARD, Category.KEYBOARD)
// populateProducts(RAPIDAPIENDPOINTS.CPUFAN, Category.CPUFAN)
// populateProducts(RAPIDAPIENDPOINTS.CASE, Category.CASE)
// populateProducts(RAPIDAPIENDPOINTS.STORAGE, Category.STORAGE)
// populateProducts(RAPIDAPIENDPOINTS.PROCESSOR, Category.PROCESSOR)
// populateProducts(RAPIDAPIENDPOINTS.GPU, Category.GPU)
// populateProducts(RAPIDAPIENDPOINTS.MOTHERBOARD, Category.MOTHERBOARD)
