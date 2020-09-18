import { Picture } from './../models/picture';
import { Person } from './../models/person';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeService {
  public person: Person = {
    _id: 1,
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QB+RXhpZgAASUkqAAgAAAACADEBAgAHAAAAJgAAAGmHBAABAAAALgAAAAAAAABHb29nbGUAAAMAAJAHAAQAAAAwMjIwAaADAAEAAAABAAAABaAEAAEAAABYAAAAAAAAAAIAAQACAAQAAABSOTgAAgAHAAQAAAAwMTAwAAAAAP/bAIQAAwICCAoLCggJDgoIChAJCQgKCggICAoIDggICAgICgoICggKCAgICAsNCgoICgoICAgKChAICw0MCwoODQoKCgEDBAQGBQYKBgYKDQ4LDg4NEA8NEA0NDw0PDQ4NDw0NDQ0NDQ0NDQ0NDQ0NDw0NDQ0NDQ0NDQ4NDQ4NDQ0NDQ0N/8AAEQgAUwBTAwERAAIRAQMRAf/EABwAAAICAwEBAAAAAAAAAAAAAAAIBwkEBQYDAf/EAEEQAAICAQIDBgIGBgcJAAAAAAECAwQRAAUSEyEGBwgiMUFRYRQjYnGBkQkyQlOCwRVSc6GjsbIkNFRjcnSUpNH/xAAaAQACAwEBAAAAAAAAAAAAAAAABQEDBAIG/8QALhEAAgECBAQFBAIDAAAAAAAAAAECAxEEEiExMkFRgSJhcZHwEzOxwRTRBaHh/9oADAMBAAIRAxEAPwCx3XB2GgA0ECW+PTxhyber7RtsnKtlA9y0uCa0LrlY4j6C7IDxgnPJQq+OJ49cSlbRbl9Onm8T2KrL2yySHmvxKjMXZixadi54jJKz5JLE8TEkt1yc9dU5/c0undLoej9nRH+t5k/r+4z/AFwcqV+YGuczkdqGUlPuT73d02WdbW3yMoyOdVZnNKdOmVmiBKq2OiyoBJH+ySMqwptBKkmXJ9yXfDW3elDuNbKqwKyRORzIrCdJIZMdCynqGHR1KuvRhrUndXF8o5XZnd6k5DQAaADQAaAOL75+8lNsoWtxbDGOL6tCccdiRligj/jkdE+WSdQ3ZXJSu7FLna/Ybd+dlYmaVjYvTu+TxvFG9ud2+yFUhR6Auo9FAGOM9XJjOVPRQj85sz7WzrlVPowIGfiBnH4jJ/h1SuppavpyNPS2jDNXbqR1XPvGfT78eh10+qK10PensHD5R+r6rn2GcFf4fbP8tDdyVG2g2v6PXvDepuDba5+otI3CCegu10aRGHsOZEskbH3KRDV1GWuUy4mF1m5lkg1rF4aADQAaADUkCo/pCN4b6LRpqcCS488g+KVIGCg/LmTxyffGPlrPWdomvCq8+wt3hM7HRz7ncdxmOLbfo5HtxblIQxH2hHA6/Lj/ACVYiWWC9fwegwlP6lV+S/JE3eD2GmiMtQ+WaORo0bHpZr9UOP6syhXUftBvtDWiEr+LkzLVg03HmaexDxxRWmHLdVR5AMkBJP21JA44QQcnAIAkUhXVlXp6OxUtUnzNoKA4wvoHBI+UqDzLn5jDD48JPvrg75nRdjrxqWalweXlXasjH7AnQOOnxUkY98/PXdN+JFdZXgy3rTMSBqCQ0AGgA1ICo+OymM7bIfTiuRfxOKjj/Qfcaz19Y9zZg+N+gq3g67ER2J92Ni1uTSrNEsdTbLBrvJFyXmV3KMhIjyYVLyRoD6klsDLU4YvKu5toLxS8T7OxuO+Xw7WeVct1V3Co0cbTTPbvSXzKIYy6ShrcIK8kJh+XMrYI4S3CuYg43s7e1iKv1H4te+uxAfclW3Pc7EG1SyQ11eOzdhMMSmRhIsfOqByJFjjc8U0qcuRomR2UZODokoLX0M0JVJWjfr6+hKk3clWUS15/p8FmECeNHtzoTAvTijBChiFDIHAIOAflqFJbqxLi1o2yKdsSSKDc2eaS1Gtrl12nxx8EcwRHYjGWYgA4wPJlcZxrmds6siad3CTbuXaba+UQ/YU/moOtwtMnUEhoANABqQFc/SFvy9tq2/3e6V+LHuliGzBj7uNozj4gaqqK8WXUJZZpi0+F7sTNLYtz0ZxRtRW45zIYRPHLt1ysV5MsTMgkAkhEiNxBozxcLLxtlXVrZElJXX7H2Hw6qtuLs007+XPT1GU7a7NflQf0lajemHjM8NHb2gEqBwQtqSSzclNbOGkSHlBwMPxKWU4v5C1UVZ9b39hj/Dad5yuulre5w/eN3K7PasV71KX6BuZkjtV7G3rHJxOMKJrFcgwypjyyOeW7JlWdh5dTSxE4K0ldeZFfCUqjvF2fVf0ZPfv2Q3SWlNYtWqvHXq2LKTVNq5Nvihgd2CSy27UcaScOGArke4CkKwupYlZkox3fUz18E8jlKey6fsr32PmiKOi54mktwkHJP1MI5mST1P1nAhzknPXOmis5XEOsYZfli9etFgAfAAfkMa1LYwnroANABoANAC9+PDZRNss0R6A3NuPp1/36EdPzzrippFl1BXmkJF4Y+1z7fu8EFghEsRtTVicIzBi8Q4vTiVuIKp64l6e+lNaGenpyHuFm6dXK+Y7HbW/bR1CmJarKyySGq1iRH9Bxx8+BXgbqGYHKH2IOQpjlv4m/Y9M4ykvAlfo3Y4za9mWqWlqS1Z5nXKxV9rsh3ZiccTzXeGFCf1mUPgDOMa0TVK2sm+xRThWzfbslu3Jfo9/EJuUseyXzY5fOalLARFkR86yphCR8ZZj+vgZ6tj0Gca4w8b1I26nGLklSl6CKdjOyEkt+u2PILNGAE/uzahViPtSsWcfZVCfbLyD1SXU8nODs2XQfHW8VhqCQ0AGgA1IEG+M1x/RMoP8AxVDH3i7Cf5aqqvwM0Yf7iK4+9yrmvzBnijkSZCoPGrg8IZMdQwJDAjrlRrDT4rdRpW0jm6DZ9y/f04hrRbs6IXhhaK6cJA5kjVhHZyeGvY68KsxEcv7JVjywrq0U2/p8uXP/AKO6GIailU6b8u/QlztL3g7fUjM80sMa+wV1aR29khjj4pJpW9FSNWZieg1njTk3sbJVoxWr/wB/gR3xNd4l+9aoQyg16jSGaOqOrA1567K9xlJQylS5EY8kePV2GVbYeEYqTW/U8/i6kpzipbPl/fmdN3egG5QU9Adx2/P/AJtf4fHGP/nrq6lxIor8DLOhpmIj7qCQ0AGgD4z+/wCPyx8/loAT7xleIfZ5Yotmr2YbN17sLPDWbncEdYSTuZpIw0MTZVQEeQO2ThSAxFVXgZfQ+4hTe1kHFDKOo8jHKHD+UcWUPs3TofY41gi2mmOakVKLQ33YfsRStU1hAClfKpUAkRsi8AYN0eMqMYb4HGNKZyakPKUIyhY8Oz3hnpxPzPqx/YV44nI+BcZIH3ah1pNWuzqOHinexFvio2GCOzRSIcvhSRgFPQoEZW4/dzxNG2Scgj79bMNJ5ZC/GRWaPf2IyrdqI6jwXZSVjht07MrBWYiKC5BLIQqgs2FUnCgk+gBOtlLiQsr8DLL+7rvb2zco+ft1iC6nqTBKGdc+0sZxLE3xWVEYe400Eh1udQAaAF+8UfjCp7GqwBDdvuoaKqjhURGPCs12TDGCEnIQKkksuDwJgO6FwsVwd8niS3vdOM3J5JIiTw0qmYKXXoFeNG47A6+ZrUk3pkKvprm501Y0/dr3ZyIKm4yDgV5rMcKkKCwhh5csqgHCwo0qwxj7D6qrcNzXh147kpbiuUfHXyNj59D0/H01gW6uNJbDF+HKhLJQo7jUkE+ayxSxS4XiaEmGRQ69AQyErxpke7eul+I0m0NsJrTjJMmenvkrtwCGWPoSzTmNUB+ClGlLnPwGPfPtrJZG9MUnxJbpndkrlzK6UBLJhQsac6YhUQDLeiK54mY9fXrjTahG1O/mIsVJOrl6L8sjDtzRD1bMZz1gkXp69VwCPnnGNXwdpJmSqrwa8iId67L2tsuNF9bDIpBjs1ZWik4JFEkc8EsLJKsUq4LBSAGB6EZOmb0Elhou5T9IfudJkh3bO61OJVM6qi7nGCcZ8gSG6oyPKywzYBPMkbCkuQ0WPdku1ta5BFcquk8EiCSKRD5WQ/fggg5VlYAqQQQCCNScFLXfJ2mlt3NwuSkvK92xJ8+CGdliiH2UjjSFf+n45zyy1bHI2pTjKAydVJCuFJRjklWIbhJGQDwtg9cHGNBJI9Pvne5JSrGL6LHAXgiiMgfhWaKZyqsI4/q/9njxkHOSenpqms7pGvD8R3zv9Tx/8ni/w86wcxjyJh8HnaQVlXb8qa0sUd2o6sSqzSAx3K5yThksRysBn0cDA4ckx1K9po7/AMZXyt032GW7SdoY60UliU4VVLH4nAJwPmcfh66UQhmaiP6lRQi2IJu8zy3Xt2OFbU6SWpIwctHWEpr1I2+GY4/pJHxsdOmNegnD6cFE8lSqOpUlLqYPbm3wRyf2Yb/2IV/nqiK1NE3ZEYdt+9ma/wAhXhbmQolU2OcvC0US8soI+WvlBUSqeYShLDzcROmd76iZ7nPOfMi/aLH7o+n+orjQBu6W924xwQz2oI8sRHDYkSMFmLsVVGCgsxZ2wOpYk9SdByY/aJz9Is/9zYP52ZtDJWxoNjc5I9gHUD5JM4UfgOmoYPYz9nfFuuR+/rf3rcB/uONUSd07/Ni6i7y+eZPm2day5/cAf4esa3HC4exw3g73mU23rliYufVlCH9UPYstDKV9141JBCkDzFhhiTphW+2/QV4d2qK3UaftB2us2K0hmcycFhI0yqDCic4zwgcR8igs2WIBBJBbK+hBKd0hriKkpU3d/LiadxG6yTWbE0rGSRhKzMxySRJEo+QAACgAAADA1rr7IWYTdnX99MxET46dKg/Btxrg/nqmlv7mrEcPt+SMtuPl/F/9ba3LYVs1mxyE5J6+SID7uDi/zJJ+P5aCDeUjlQT8/wDM6k4P/9k=',
    name: 'Carolina',
    email: 'kro.robles@gmail.com',
    aboutMe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatibus ipsum similique reiciendis consequuntur et beatae laboriosam rem? Assumenda natus suscipit quam similique illum voluptas, praesentium at hic quod accusamus sed cumque quisquam aut fugiat vitae, accusantium aliquid deserunt vel nostrum labore culpa expedita, error sapiente. Quas optio qui magnam adipisci odio architecto neque quidem, illum omnis explicabo quod quae tempore officiis nemo nisi? Iure quam quo illum consequatur, aperiam culpa corporis et dicta aliquam provident ipsam ullam, excepturi repellendus eius quos! Rem ex maxime veniam omnis nulla facere magnam corporis accusantium, exercitationem, itaque laudantium non obcaecati pariatur fuga! Ipsa?'
  };
  public products: Product[] = [
    {
      number: 0o1003,
      name: 'Green pencil',
      date: '2020-10-10',
      sku: 229,
      weight: '0.02kg',
      height: '20cm',
      width: '2cm',
      origin: 'Singapore',
      minimum: 100,
      delay: '30 days',
    },
    {
      number: 0o1004,
      name: 'Red pencil',
      date: '2020-10-10',
      sku: 243,
      weight: '0.02gk',
      height: '20cm',
      width: '2cm',
      origin: 'Singapore',
      minimum: 100,
      delay: '30 days',
    },
    {
      number: 0o4673,
      name: 'Ruler',
      date: '2020-10-20',
      sku: 331,
      weight: '0.03kg',
      height: '30cm',
      width: '3cm',
      origin: 'China',
      minimum: 50,
      delay: '30 days',
    },
    {
      number: 0o4033,
      name: 'Notepad',
      date: '2020-03-11',
      sku: 211,
      weight: '0.04kg',
      height: '30cm',
      width: '12cm',
      origin: 'China',
      minimum: 70,
      delay: '20 days',
    },
    {
      number: 0o2212,
      name: 'Big Calendar',
      date: '2020-12-16',
      sku: 322,
      weight: '0.04kg',
      height: '50cm',
      width: '70cm',
      origin: 'Taiwan',
      minimum: 100,
      delay: '10 days',
    },
    {
      number: 0o2214,
      name: 'Small Calendar',
      date: '2020-12-17',
      sku: 322,
      weight: '0.04kg',
      height: '40cm',
      width: '50cm',
      origin: 'Taiwan',
      minimum: 100,
      delay: '12 days',
    }
  ];
  public pictures: Picture[] = [
    {
      _id: '1',
      title: 'Colours 1',
      image: 'https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      _id: '2',
      title: 'Colours 2',
      image: 'https://images.pexels.com/photos/1919030/pexels-photo-1919030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      _id: '3',
      title: 'Colours 3',
      image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      _id: '4',
      title: 'Colours 4',
      image: 'https://images.pexels.com/photos/796607/pexels-photo-796607.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      _id: '5',
      title: 'Colours 5',
      image: 'https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      _id: '6',
      title: 'Colours 6',
      image: 'https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      _id: '7',
      title: 'Colours 7',
      image: 'https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
  ];

}
