  import {useState} from 'react'
  
  
  
 export default function RenderProduct({addToCart}){

    const [products] = useState([
        {
      name: 'AA Battery',
      cost: '$2.99',
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEhUUExMWFRUXGBYYGRYYGBgZHhgdGRcYFhoYFxodHSggGhslGxgYITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGjUlICUtLS0tMC0tLS0rLi0rLS0tLS0tLS0tLS0tLTItLi4tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xAA9EAABAwEGAwQIBQIGAwAAAAABAAIDEQQFEiExQQZRYRMicYEHMkJSYpHB0RShseHwI3IzU4KSwvEVQ7L/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAgEDBAUG/8QAKBEBAQACAgEEAAUFAAAAAAAAAAECEQMhMQQSQVETYXGx8TKR0eHw/9oADAMBAAIRAxEAPwDuKIiAiIgIiICIsNqtLI2F73BrRmSUGZFzO/vSgWPLYI2UHtyEuJ6hjdvFyjIuK7ZaG07fEfdDRG38qn5krJZS7i+XzxHgf2cWEuBzccwKain1Uvdl4NlbUZO3by/Zcmu60u7drZRgeWmg2OlKbHdXCwzFrgRkQcvseYWslXVFhsloD21HmOR5LMjRERAREQEREBERAREQEREBERAREQEREBERAREQRt/X3DZIjLKaDYDVx5ALiHFXF1otr+8cEY9WMHIdTzPVbfpEv02m1OAJ7OPusHOmrvM/RVOizym3VelqkrvtpYD0BPyzURaLU2Md4+A3Kh7RekjjkcI6a/NcpjZXb3Sxdf8AzUkrR2pGzmloFWHYg6nqrjw5fXa9x9BIBWvvjmFx6xXk9uRzHVWK7b0BpmWuBq13un7dFuFzl1k9HPj6fLGZcV1ddy/5dtsFtLSHDTQjn08eqs0EzXio0/mq5Xcl/h3dkyd7XXfGDyVwsVufG6mp/J46cnBdXiWhFjgma9oc01BWRGiIiAiIgIiICIiAiIgIiICIiAiIgIvCaLnPGPpDjaTDZ3YtQ+Rv6Rn/AJfJZbojor5GtFSQBzJoqxxNxVAyJzI5Gve4FtWmobXImoyr4Liv4sE1wB2de+XPz594nNbVqnbIAdDlmCsmcrbjlC+YRiLgKAnPx5qFt0rY24j5DmeS3xbSMiRkKZ6Hauar3EB7zczocuWf8+SyeSzrtEzzOc4ucc/5kF8hKLNZoMVc6Aa6fU6b+Stnghjc40AqpzhyxNle9jpOzeGExtNB2jxoyriAK+K0YiC0OaRVvs5AVO3PPnvTnp8S4XeqM9xTTpyr+qhcXh9kEYjjfJSYsxkVb3D7pIOvTp5G1cN3vi/oyZPGlc6/2n6fLkqfwzfUL4YrO2N7Jmgj+jBFIZt6kuza4CtdlLWqwzAB3ZysIPdL+yaQdcgx35U/fccvisyw+cXS7rt/ZmuZBpib/wAh1VnjeCAQag6FcsuO+u0GF9BIKVrv8QVvuu8Sw7lpzI5dWqkbWZF8xvDgCDUHQr6RoiIgIiICIiAiIgIiICIiAiKA45vR1nsUr2GjyMDTyLsq+QqfJBQfSXxq6RzrNZ3UjaaSPHtkatB90fn4Lm7HOcaNFeZOg+56BZ2sdK5sTPWcQPmaDzJNPmpXjGSyWOP8JBGZLTk18xJo33mxsBpWuVSOepC83JyX+nHy+j6T0nHr8bm37fiTzfj+27r7t8K3C58jy2pwgmrgKA0yoN9eq3w9zSML89gaH8tVsXnwrPYmxiV2MvYHhrXOwt95uXrUNM9DVYmRho0Dea8nLyXHLqv0PofRcXJwy5YTvv8A1P539o29n1aM8Lh+ag57SXUrsKLevi2h+TdBvzPRQ5Xv4t3GXLy/L+tx48ObLHiu8WxWqNWBhWdpXV5akWAZPZnSow+Wnl+evVeykOq+PETSrqZUHU8/BaLXUqNjkVKUAa3s9ToKVrzdTmM8/LRZYS6Yg0gCSN2EjOoJBHgRmD4lWPgqB8jZnfiGNawY5InxulLwPbDKZ0PtA1HQFQIYWgPaatNSevXxr0+tPlrnxESxOLOTmkilRQ0OtNR81DpOl8lmjcWvjma5x77S1uCnMUxEg11aeeVd7Tcd8iTuv7rhr9wqdw/ed3mJ0j4bPC1gDSCXzTSOLci0OOTa+PLLVZRb4H4TG+ruYYWAchSpp5HJXjd9VPJjruOq3dbzG6nrNOZG3i38lZIpQ4BzTUFc0uG9hI3s5MnjR2/iPt18lZrDb3xHPvNOtM69ehVOcq0IscEzXtDmmoO6yLFCIiAiIgIiICIiAiIgKu8dWUvs4+F4J+RH1ViWG12dsjHMdo4URlfn9mCz2rGRk2Rhp4YXZfMqevHg+z2i1G3fi4xZ3DE4HVpObsJ0zqdcxXdeekHhx8Lw4irHGmIaVAp5GlPkdVT7NZw3GCMgcvDPKuS8fNjMfdk+/wCiyy5rxcc6k+fznfj73F19JFtjf+FLe6BE5+eRDXluGvLJhXKr1vQyd1uTP/r9lJcXX9Ja5iQKA4WhranQBoa0akV0HMq78FeiluET3hlliEFaADWszv8AiMuZOicfFN+/Lyj1XrspxT0vFdYzzfvd3r9P3/RyNe2mzhoBBqDuuy+lH0fxmL8TZI2sdG2j4mAAOYPaa0ZYmjXmPBcejpv5aZHz2XqlfGymmpRZmkHxXs0JG2X86LE3JUlsNNVsWaXDXkcjt+fJasMhbmFlQSbJcOZIwkAnwOWLoNsOpFeq+ZWBrsVKsz64a78qeG3VRziaUrl/AtqxTj1HuIbXTb/Ua5BTY2V8SnOorTavXkK1IXQOE7DY5WgxWeZ4bQTSSTMY1hpXIAjENeWipbWCJ2nddocsq7EnbqvqxTmzytkwNkaHVwPALXdCPDQ9QVNXNS9ugSENcCySKrT3cEof5Hp+lVbrhvdsownuyN1b9Qqu28LVaqvsbWPgeAA09lE6F+RLPj+VCCscbJWnHQNkZQVa9rhXQtJB7vSvh4Xjlvqo5MPb3HS7HM5hqwZe1H73xN5O/X5FT8EzXgOaag/yh6qjXLfDZ2592RvrDTPSoCnLFbHNNefrDY9R1/66qkyrCi+IZWuFWmoX2saIiICIiAiIgIiICIiDTva7o7RE6KQVDh8jsR1C4FxXdslllfE/ffm3PMeK/RKq3H3C4tkFWj+tGCWHnzYfHbqpuEtlrtx+oz48bjjfP/fsoHo14aghYbfaCMgTHi0jaNZD8R25DxUnxpb7NeN1SSxzmNrHE0ccOJzdIpG74gQWjmWladxWyKAfhLQ7FBKzIvFMDi0GSJ3w1dkdjUKq8FcMNtlsc0YjZI3Y3YssYBIja4c3CtemLSqj5bPC5+j6y3ha7JGbXK5llaKMaKtfO0aGV9a9kBkKULgMyRrzHj+GwttjxYnAxnUD1Q7cRndv5a0yXdr+uaW1jsDIYLKBR+CgfLT2AdI4wMjkSegGcLZmXPFisljswtMjm4ZBE0PyOR7Wdxo3/dXLIJKWbmnCLO1rqh2pyGpPyWpLGQaFWjjThOewygPb3H1LHA4h/YXUFXDwFdVX2Q4shr1NKddF0lcrNNUGiyjI/wA3Xy5q8jdQ56LUtheUXjcsl90Rrcsc2I4XknSgJoCfiOppsP0WeZhBwOyadKCldDTM5D+bqLClbNM17cLiS6hJrlpuOZ3qT+82NlfN22kWedsmBsojcHYTWnSpGhB/NdLhvCGeIT2i3RFzxUWdr+yayuz9Xk+K5v2VKxuFK+rlqPv1K14BGyVvahxjqMWE0JbvQkUqp8rl06PFaKPD4pIy4aYH4qj3XVAPnT6K53LerJm10cMnNOrSubRcW2KNro7NZC1jsi8v75HiQ75Lcu69GucHwuLXjQOp3h7rqZHxXXHuduOcmN3HVWWt7M25u1p79BWnjRTd3W1k0bZGaOGm4O4PUHJUu6L1bPHUd1zdQfZP2/6W7Yrw/DyYzlDKaPH+W/n/AGn9KIbXBF40g5jRerGiIiAiIgIiICIiAiIgovHfCzH4pmNFXNEb8tMUsbu0HgA6viq7wde1msME7ZSWubI52mcor2YMY3zaRTbVdbe0EEEVByIXLuO+GvUjaa1cBCDl6z5HPFf9TcvhHMqcovGoUW6331MYmOMFjb/iFvLk4+28+76o1PW5Xna7Jc1jHZQEtrhAb7TqetK/y1PgAtK4Jexu0/g2DtY2kOY7XtB6+IbncDcUChLn4mnt1mfYXw9taHd0vdQMDNe1kpo5ppQAZmnVQ6p2/wC+bst13gyPqJR3GNGKVsg2awVOIHyodaFcLvS657O/BNG6N1AcLhTI5hd8ui5LuueHtZHDHSjpnCrnH3Y2ipA+FvnVZOOuGIrxswewjtGtxxSD2gRiwk+64fmtl0mzb89yta9oI9YZUA16AD6rQc1boGEnzqM8+iwzmpJpToFcc6wtKzsdsVrkLI01WsZsKNJGY1RpyXqwSVkeJa9o71cw0ZV+In9/svHDEMLtRoeYrqMuXzotCN5BBGoNVLNe2VuKtHN5bUGpNMm/zopqmLh+aCG0sNqi7WL2m1IpXRwAIxU5HVdLfPC7/CnsLIT6jY4y+Rw+JuoPgFyKWWtchXc6k+ZVj4C4iZY5nmQHDIzAXtALo9w5oOvUb5LLFY2eF2q5knaRBwIpQuY5okG7TiGvXfxVnsdujmjJp3XDDI3cfuNRzVKlvuwuNGz2q1yHbNo/2/styyGZhErY3srlhcDnTOjshnyKuXc7c88dXp0Dh69DG78PKajWN/Nu1en6aK0rnthlZMwOZka1FfYdu09D1Vmuq8iO6/bX4fuP0WpicReNIOYXqNEREBERAREQEREBa1vsbJW4XDQgg8iNCP5uVsog4+BaLvdLJXE7G5jonE95jWx4JA7cgvGe4JVgsFpgu+ydq6kj5G43FgFZnYcRw/CBWg28SrFxjdJns8mAAyYHAVFag6gdeS5VcVhBtFk/EvPZVkEbSTQODiMB5Aup46KLj8umOXw6Jfly3fauxtFpAwsALcbsDSHUcA8EgeS17dfL7W11nu6hFMD7TSkcQpSkf+Y+mgbkOa1r0sxvFwszXUssT/6zxq9zMhEzw3PMBWC2g2WyOFlhDjGzuRDIZfqd6alS6OZ8Xei1sNm7SzOfJIwEyA0741JaBpTlmuWRPwn1Wn+4Vp5Lt3DXpPgdA82w4JWHRrf8QHTCNjsa+K5FxJbIZ7RJLFH2THuJDK1p9udNlURlGpeNnzJY2jDTOlADTbcg0Ue9tFvWa0Boc06Ea0r5U+qx22zYDqSDm2vLqNiqjm1WHNbDHLVKyw6jMDMVrt1NErIzFA8jTcUXrhmQCCOY0PUVXyQsVUgYmOb3cm9fZ2q7dzjn0AUZJkSK1odeaztkIBGxFCPqeqwuagnrg4utFkjfHDgGPPGWguB3oeXjVXDhu770tBEtoe5kRFS6QjvA+6z9DkuWkLdkvadzGxukeWNFGtLjQDoFmvpUy+3V8U0EpcwHWmdKSjrTLF1VosFvbI0SRnMc9QRqx/381w6573c00qfmr5cV8FrsYFaij2+8OY+Iarprpyvnp1GG9WxuYDXA8VIPsH7Keaa5hU27Ju0FaULak0+VflmFM3feAb3HVy3I56H7hTtuk0iItBERAREQEREBERAVM4y4eY5pc1vrUbl7JfLGXOA8ia8681c18yMBBBFQdkbLpROF7URG+zBzWzRhxa/USBxJEvXM97qqXdHFdvsM09nex08j3EsaakiQnUUzLTrQcsqKxX5w/JZp5bQxxBFHw00NS4vYRy1r/dVS/CjrMaTEg2iUuDy+geHDN0bQdGtA0GwC52adpdqZc3ovtNpkM9tf2OMlxjYG4jU1z9lnhmr9d/Al2QsLW2djqggvf33EEZ946eVF9W2w2ya1tBkDLG1ocWsydI73HnXDuaUBGSpPpI4yfI/8BY6uJOB5ZmXH/LZTYb/LSqGnNOK7FBDaZWQSdpGHHC76V3ppXeijoaOqCKk6k5nWtR1y5rqfD3ohe9hfa5DG4juxsoS07F7tPIfNc74juKaxzuhkFC05HZw2cOhVbc7PlDvjINCvmi2XPLsiTvQAadPBYnMIyK1Iw/JZarXqsjSsa+ivQvaIEa+S1Y3NWwGEqeuzh6tHSDwZ9/sst0SbV2y2OR5q0Hx2XQeDrG0huKQ48xhaBrpTOuaxR2Rvq1DaA0y3G2S9sNx2h78UbXDrSg+amcm1fhr7Y5XWX+oxznMp34jQ1+IDY+CkmXjHamhzDoPV9w/ZRdiitNB2jmkjelSfHmtm7ruELy8OwtfUObqCTuOS67lcu50t1wWh7ogJKdozuuwmo5gg7gghSSg+GLIGiWVsmNsrqtA0aGjBQc8wVOICIiAiIgIiICIiAiIg072u9s8TozlUGh5Egiq4/wAV3Q+GUytcWyhz5TQ+oDJRhC7YoPiO5Y5h2hZiIaQ5o1e0EPw+OJop5jdZVSoXiS+Zewjisxx2i0DCwt0Ap35egFdeq84c4csd1wumlc3tKVknd19lm4FdhmVXeBL0Yy0OY9uHH3IiTXB3i7sqnSpNetFLcW8KWm3WqMOmw2RoqWjIg7im5PvbfrGtOssr3h7jma223s4LOTZgCHSHUcnE6DSmHXNYPTFdImghwMxTmUMjAHecCCXDwFK9FN3nethumzhoaGgDuRN9Z55n6uKzcNRTSgWu1ANke09nHtDGc6Z+0aAk+AQ/N+bLRA+N5a4FrmkhwORFNQV5OwEVb/P3Vs9Kd62a0WxzoGgBowueP/YRv9K7qoxvwnotc7NVrkL1gWxaIxqPt8uaxxEcqrR9N5L7axZIrM5xq0Kfui6w04njMafdZbpUx22bjuoMGJ47+3T91bbjuCa1OIjwgNpic4kAeFASStO6LEZ5mRNIBdudgBU+a6tZbILPGGR0Dsh9ySuc7vbpvURV08KWez5kmWQ6nRo8B+63pYI2et5NGpWxNPh7rM37nl+/RYoYAOp3J1KqYudzrA5zqZRho/NZLDYu0NTTCPt91meDoM3HIfzkpWzQhjQPn1XSRzt28slljjbhY0NbUmg5k1J8ysyItYIiICIiAiIgIiICIiAiIgpPFVwNbjLGZTvbipl2bg15Dxy72E+ZG6rDPSJaIIgySDHJhGF5OEOBGTnCmfkc+i61LGHAtOhXLOL+GDic2hJaIWQ5gYhRwI6HL5+KzU+Vy9IPg26LTeVt/FWmromOq4nRxHqxsHIHX912S22Vssbo3VwuFDhJaabiozHkqhFxTZLLYGva31W4REPWxD1g7lnmT1XJ7946vC0E1mcxh0YzugdMsz5lQuu0OsNz2MZts0R+LCXfnVxXFOP22H8SX2J4cx2ZABAa7cNrtuq26ZxNSSTzK9Iqt0y1rOad1lhC+hC5xoASeSk7PdLxm7LoPqm2SJ/g2GHtG9qaNqMXhurXxnPYSWNsuw7xbXy1/VUOw2cl2RIFKZKbua5ZK9qQXNyDiOn1pssrpLpc+AruDHCZ4JIb3dgCd/krjNLhFR6zjlU6dVF3ZhwVbShzyW/LQuHlTengFkiMsn3DGB/NepWy0HbUr2CyuO3mVIwwhvjzXRyY7NZg3M5uP5dAthEWgiIgIiICIiAiIgIiICIiAiIgKNv26m2iPCci1zXNPItNfkdPNSSIOLcQWYC0GfDgwSlkjfI0fTlSh8iqnx0YjIxzaVc04iCHaHLERkXU+i7jxZdbMD5xEJHAAub71AQHeQJ8vBcIvqw0Jp6rjl8J+yz27X7+tKy5b922R0po3zOwHVY7LYXyPwAZ79PFW6xWdkTcLfPmepU5XTcZtlsl2RxjuAk0zcdTz8lO3FcbbQ4g4shWopQf3E/kArfw/wAIRMZHNO7E+mLBRpaKjQgg1KlpzFEAyOMNrmGNoK/E7kFzuNdPdFKsXBbGvLsTiCfVVlNlwgVHRSDWuOuXQfzNeus/z/RdJHLLLby67G0up0qemdB88/kVORwNboF8WKz4G9Tr9B/OZWwrQIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIC5jxnwjhc90Yqx9XBoG+rmDyq4eBC6csNqs7ZGlrtD+XIhBw2x8PmOMPbm52ZruNvA0UzcfCr3S4pKBgINB7W+qst82MNLgRzW3dDC1jWk6Bc852viy8pFz8IG7vZHLqV7Z7PQknNx1JXzFmarbFFsjMstvpgWeywe18vuvYbPXN2nL7raVJERFoIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCLvm7O0oQO8Fox2OUZYDnkrEiCHsthk3yHVScNna3qeZWVEBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/9k="  
      },{
          name: 'Blanket',
          cost: '$19.99',
          image: "data:image/jpeg;base64,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"
        },  {
          name: 'AA Battery',
          cost: '$2.99',
          image: "data:image/jpeg;base64,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"
            }
      ])

     

    return(
    <>
    <h1>Products</h1> 
    <div className="products" >
  {products.map((product, index)=> (
  <>
  <div className="product" key={index}>
  <h3>{product.name}</h3>
  <h4>{product.cost}</h4>
  <img src={product.image }  alt={product.name} />
  <button onClick={()=>addToCart(product)}>Add to Cart</button>
  </div>
  </>
  ))}
  </div>
  </>
  )
  }
  