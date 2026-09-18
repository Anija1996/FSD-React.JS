import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

function Shopping() {
    const img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdpsYCh07Y2VPGd3Rwb4rgnldqEskT_gk5Ay0eI1Htw&s=10";
    const img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdjmEEn3vFhTLHDH6-UMq_0iCmFfvRM4wlvUxObkcYQ&s=10";
    const img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCt0QXScDtHvqPkezVqFfcx4QSogjwQj3rDVU7rOFJZA&s=10";
    const img4 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhISExMVFhUVGBgXFxUVFxgVFRgWFxUXFxYYFhgYHSkgGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGS8lICUtLS0tLSsrLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0rLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABFEAABAwEFBAUICAQFBQEAAAABAAIDEQQFEiExBkFRYRMicYGRBzJCUqGxwdEUFVNigpLh8CNDotIWJHKy8TNzs8LDY//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIREBAQEBAAICAwEBAQAAAAAAAAERAiExElETQWEDcSL/2gAMAwEAAhEDEQA/AO4oiICIiAiIgIiICIoy3Xs1nVb1jx3D5oz11OZtSa+FwVTtNtkec3kDgMvctURDXedTqfaprjf95+ouhkbxHivJtDPWb4hU7CP3T5JQKan5/wCLh9Kj9dv5gvLrdEP5jPzBVHJMk0/PfpajecI/mD3ryb2h9f2O+SqNrtkcLccjg1o3k5VOihL22nhjYHNcJMVcLWOBrTiR5oTSf6931HRfryD1v6T8lt2a1xyeY4Hs18NV+erZt8/ER0sTPutGOnaTXPwUlcm3rg4Fxa4etH1XjnTQ9mSvl1l7nuO9IoXZy/WWpgIcCaVqNHDiOBGhG5TSrcuwRERRERAREQEREBERAREQERQu0t/tsjAAA6V3mM3c3O4NHt04kBvXpekNmZjmeGDdXMuPBrRm48gFS7y8oj8xZ7Pl68zqf0Mqadrh2KuWuSSd5lkcXOPpHhwaPRbyH6rVfGFcTXq27V3hJJjdM0AaRsBbGMqZgZu3+cT7qacm0tr+0aOxjfiFmkibTQKLtDVM1LJfcZJdprX9sfyR/wBq1JNqLX9s7waPc1a0wWlKFfimc/Tbk2otX2r/AMxHuWrLtPavtX/nf/ctKULUkCvxXx9N2TaS1fav/PJ/csH+I7QNXuP43j4qPkC13qYvhOPv90zQySWQCtQHuL2109KtNV8baTE5pwjKta51B0017VXnLfuyfH/Cd+A8D6vYVMMWex7RQ5B0Ubu+nscFLss112rquZ0Eh817aRmu6jm9U/iC53aoaE8feOK8QzubocuG7wUxm8T9OmXFeM102sQTO6jjiZJo1w0xgbiNHN4ccq94sNpErGvG/wBh3hfnm5rWy8rP9EkdhkbnBIdWSNGTSfVOnZUcF0byR366SN1nlGGSMlrmnUOblTwBH4BxRJcvl0dERV0EREBERAREQEREBERBgttqbDG+V5o1jS5x5AVNOJXKJZ32qV8z9XZkaho9Fg5AeJqd6uPlIteGzsjH82QV/wBLAXn+oM8VW7ns4MVTq4k9wy+ClqxoSLXeFZbvutsszGGoBOdBWoGZGuVQDmvd9sbJM6KEHCDhc2KzMcWhuRcHVxHrDll7U6SxUnRhw1zWpaLGRr7FbXbMfwpJscgwaMki6MuJoAB1zqSAvdv2RewgF0zjQH+FC17QeALpGk+Cu/SY51aYKGi0ZIl0q6rksxstptE4e7CTGyrcJa6tA4NDxiPWZUEgAgip1US/ZuF1mfaXTPbGJBGysbcTtMRwh9PWyr6OoWvkmOfvaAdKrWkiLtAr9Z9k43B0hFqMRP8ADeI4m4ss645QBmDoTkpW0+TiMzxRCZzWGJ00pc1uONoIDRkSCSS7kMB1T5RMrjdoFCa7vetV5V/2Qu2w2y32WKzttbqSdI505hEfRx1e5xawYiXFrW0rQY1KeVS5OlNovIyxyh0zbNG1jx0cDY2nE6V3puq1wwCmEyZk6Ka1jlTIi40GvBfHMMTmk5Z+7X3qeutjKHACaayEUDjvp2KN2jGbRxxfBZ+XnGvj41s3wzzX8de8V+ajHMorFeFmxRN7fmoQsyHYFUfLDanQva8E5a017uY1XU7mvPBabNb2UpORFMBkOlABY7L1mgflA3rlfR1Vn2ItHSNlsbj54rHykacUZ/MKfiUrPUfp2J4cA4aEAjsK9qC2JvD6RY4n76UPI7x3Vp3KdVWXYIiIoiIgIiICIiAiIg555Upv4lmbwZKT+Ixgf7SvF3wkRR/6GnxFfio/yoT1tjWj0YWjvL3n5Kz9DhAFNAB4Ciz1WuWC7rUYHF2DEaUGdKV36L5Y7f0YlaWV6TJxBoaZ8jxKyUCCIZ0zWdXGnareBCIWsIbjxmjqONCSBWmVOrn91ebBfcjS/D0lSMIMkr5QK7w0gCqyWmHI9XRRs05aKDLsyWudsyJcnmsktuw2dtmMWNrXF1cTmkmpOdNdfYFC3rbZZbPDZhGGMiJdXOrnGuZ4ec7xWzJO41r7DTxWvaX4Rm057/8AlanNjNsrW2g2lIgibJZ4z9Ga0R9aQDVgo4A0NcIHeVB2zyn2l0tqf0ULm2iJkLmOEgAYwSA4C14c3F0ryc66UpRR+2ltH8OIHQYnD/b8SqmShieuPa2SwTST2WCzROfH0VKTPDWk4i5pfMTiJDdTTqjLWujZ7/lbYZLvxRCB8jZSXte6Rrm4M2FtQB/DFRTe7iotzlK7PwMxdM4ghpIwFodUkZHEdNe1SqloLM5kTavx1FQaBopTIAUFB2quX0azRN7Pa6inLfeWI6UVctD8U7ORb7CSpzznml63wstvNImdlf6f1UJhyHYFN31kwDg0/AKHctI8Bq92WYwTxyNyoQfb86FfAvlrZVteHx/YQfoTycWoVnjHmuImYODZRjP9Tnj8KvK4x5NL6aw2V7j57XwuPNnXaPB8h/CuzAqRjj6fURFWxERAREQEREBERBxzbaTpL1cz78LPEM+Lir4443AA6gkc6Gjh2io9vBc5tcglvrPQWn/xPP8AYrtedtbE4kgtFQ6u4OAoHNdox1MiHUa4HUVNefftvlIfQqLGbOW6Cp5rHHf1nLGvfI1gJpU5NJAzIru93GmakWjEA5pDmnMOBqCOIIUlXz+2k6A019i05LCKZ1d7ApKaJ+5ab7NI6pLqBak/qX/iGnsLBv7lHWiA0JL8hWleCl7TZCN9a7wqht3eQs0boQ4GSQUoDUtbvJ4LtfE3XLNuY51fFq6WWR/E5dgyHsCj3FZHlYnLnG68UJIAzJIAHEnIBWqKwOijDCcxmct59/CvJbOwNxB/+Zk0FREOJHVc/I7us2h58lb57kY7OpPuUtsJJXPzZiVDyR/5wN4U/wDHX4rqEl3RsypmueWlg+s5ANA4ewMb8StfLWcypC/jlTkPa5Q8r8ypa/Nac2j21UBFJiLuRJ8Sis4Ky6tcOSwBZ4dUGxYre6OzuoSDHLHICNRm9pI51fGe5d58m+2DbbEI3ECRoAI91PunOneN2f509CVvFtPB7H//ADUhs5eslllZJGes3QaVGrmHkaV5EAozZ+4/WiKL2avZtss8czT5wHjTfwPJSiNQREQEREBERARF4mfha48AT4BBwi55ekvYv168r/Frz/7K6XhETmzGHU1Y/Ae+vVd3hc/2Kkrbnuz6sbzlxqxvxK6OXgipppqRuWfjtblyKhI9j8UcriC12OrHMe5hGWJ5Y1rADpQmvsURboZLMaxyOApirC97C2uhcBQtqToaqwX5ZmSeY4tLaYRkI2nF1nYQKufhrSpy5Zqo3njGIkHeQdcmuDanuoc+K53nOvDtOt58p+6dv7UyjXzAkfbMaWn8TAHA8ySrpde1vS5SQluRJeHNfE1ozLnPyLW04hcRkmqVnsd5GJj2ZlryyoBp1RixAEggVqM6HzQll/TEvNmV0XavaITMcyCQsGdHR5VFPW1oeVO9cktLy41JqVPXm7CzHC9z2Eem0AtrXJ1CQTlu9irrnLpLL6c7Op7YXFS+ydxm3WgR/wAtvWkI9WuTeILjlXdmdyj7JZDLI1jXMaXV60hwsFAT1jnw4Gq6fZr/ALFYIWRRMxvo3GIWFrXSYQHOq8Amp0IBOi3GKs9mu9gAaOrQUAAyy3BfLQ3csmztsmlhD54eic41azMuazcXVp1jmdBlTQ1UlNZWjrHNY66kvleefH/lW3w56ArksRxXnaTT+ZIPyyAf+q7XKQNGridzHFbbS/jI/wBrpD8FZZfSfGz21do7xcLQWei0trz6oJ96+2SInVresK5ADXStN+fBR1+PBtUpOmIjwFPgrH9LbiPAAHWuVf8ASPgqqIjlDi6gpQ0WxEF66JhDpGHJzyMJ1C+xhBo2xtC+nP3H5ow0oeGa2pIsUobxI+BXm3QCOWSNpqGSPYDxDXloPeBVB3/yNE/Q3DcHmnfU/FX5UbyQspYieLyryiQRERRERAREQFo39Jhs1odwikPgwreUPthJhsVqP/5uHiKfFBwnYh9LRaZN7Qafif8AorparzDmU0rrxy7FzvYuajp3ccHfXGrTLOCMt2XYfis25W5mMpnFKVoN4Gq9RSMAGEnra11r+yow5ZryyfDpuSFfLVd1meTVlDXUHDl2aLROygk/6UtCK1bIN3EOb3blKQzFxphqTUfNfZnSRYXULansNBlvW8jGoSDZy1ROo5odESQ/C4GgIIxUqDllpnnRVi1MGJwaHZVqNaUPEahdPlvEHXSlXHU0HDnoO0hVy9NnMfTWmMkAUBAFQHPBaSHV0a8Fp8Vx76546duOeu+VZt13uhjglzwytxDiDUilRxAqORXu7pyJWEONK+d18QG/JmZy4LbdJLORC85xjA2mrusDhNeGWdNxUzs1d8okwvZQMLXOLmlmOM1piY4ZnWh1BFOFJOrZlX4fv9OkbO2ToYsXTulD6OBcSWhpFQGB2YGf6BbstqO7P97lBdPhzGXLksovTDWgz4607Fvrn6cZ1t2pkjq1ccyNOHauB7G9aSR3E1/3f3Lq1vvKjHurWjXHwB+S5ZsM3zj2j2NTnnFt1GXvYj9IfiyDi91RwqSvFlORqd2HKlaaV0Gmu9TF7CpIG9rvaVHjpA0AMYKVGINaHGvrO1K2y92KItaQTWpr4rcjCjsUv7ARs0o3+wIN2Z+GZpGdKFYIgXPHM/qvJkJzJqTvUjszZDNaI2DeQPEoP0T5ObJ0VhiHrVd4qzrBYrOIo2MGjQB4BZ0SCIiKIiICIiAqz5SpsF22p33W/wDkYrMqT5Y5sF1WjnhHi79EHA9n5cLXdo9g/VS7baRvVau19Gnt+AW6Jlmw1Ott5OVVbtgb9lZaIrPG4BksgL24Qa5Z0JzGQXNBPTerV5MpMd52QfeefCKQpJhq7WeboHXtbw0OkinMUWIVDXOlwl1OIBb4Eb1hsN9yXjZLe20kPMEfTRyYWtc1wxZdUAUOGneVp2CR1osF6tjBfILYZHMaKv6MuaahozObXflK83LZnWe7bxnlY6MTMZCwPBaXOJdWgOZHWGfI8FrR8u3ZQuksJnLSy10cGtcfMaBJRwoADRw0rTuVgdtFaPpjY2FgswkEPQ4GYS3GWHOlcRqN9MtCq5sRZ5rPbrH9IY5jXgmPHpRzHBuHhVzhl97mpC67ptH08MMbxhnxuJBw4WvxYq6UIGXGoTIvyrfs9zw3d9YWmBjBIyURROLcXRNeGOdQHk+g7AONdqC8H2ux2h05D3QljmPIAPWJBb1QBu/qUQdpOjtdraI2zxTyEGM+kQ7CwsNDnp25KR2ptzIWMscTGx6Pmaw4gHkAhmI5upka8mqSSejq2+0JJmKrStlqbGWAmmI0HgT8Kd6i9oL3MWFrDR2p35bvcVUTanPcC5xIbkK/v7xWL2TlZb4viP6PI5pzeyQDk7ozkfEKubDN6rjzPub8lHXlL1ZBXIA/IqU2KFInHtPtPyWubsLGO1ef+H4rE4L1bYOkcW4sOTcx2krXiZ0dWl+Kh1IpuC0j04LE5ZHPHFY3PHFB4cFcvJTZw+3RV3PHu/VU9kHSEDEQKkGhFa4Hubr/AKD4rofkXu0G2sd0j/8ApOkocJGJpiA3AjzyiV31ERFEREBERAREQFzry8vIupwG+aIe0n4LoqpHlisJnuyUDVrmkdpJYPa8IPzfYXdXv+S2cSjrDJqO/wCfwW4CqjJjW1dl5y2aRssLyyRtcLxSoqCDqKaEjvWiV9aoJW6r8tFlkM0Mro3mtXAjOpqQ4HJwrnQhSt47T2m10NomdJTQGgaOxrQB30UTc14GAT0NC+JzW9UOo8+ac9KZlT/17YSXUiMYFqdaBRnSY4w9jhH1nDBjAPV81tOaYNy0XzLaOjMkheY2hrK0BaBppvyGeuQUjNtbbHsMTrQ8tIp6IcRwLwMR8VVdlL0ZDKHSOoA0+hjBdubQ6A5gmlaV4qxW/aGyjA9tG1YY8XRV6OjXljy30nYzFmNMDqZEVnpWGx2h0TmyMdhc3NpyNDTnkom9r+cXPOIl9cTnHOpJqa/vesl73+yenR5MaXkdVrD13FwbRu5rcDe0OI1VXeMT3EnXL3VWOriyay2u2mRxc7MnMdgzX3ouo0+sK14rWfEcR3UB8a/8rZs89ARrXzeA3Hv/AFXPN9Os8e0PeJoHc/iQrFseKQOPI/7nqp2+cuy51Vvub+FABxFPgfbiXeTI5VF3vG92IM16vLKhUdZbG+pD+Fcypl9tjY9xeRnkO6i9Ujkb0zXgnEYyylMg0ODvFxHcqiP+gD9krIy7AePitkLNEg07ugDZgB98Z8o3rpPkUP8Ammf9h/8A8fkubWV/8eHm6QeLKD2ldG8ip/zUX/acP6Wn4IO6IiICIiAiIgIiIC1L2sLbRDLC7SRpbXhUZEcwaHuW2iD8e7U3ZJY7S9rm4TidluDgaPbzFcxxBCw2eYO014L9A+VnYcW2M2iJhMjR/Ea0dZwaMnsG97RlT0hluAX50t92yQmpzbue3Q/JUSZFV66NQbbW8ekff717Fvk9b2D5JsTE0GI5lFDfWMnrewfJffrOXSo8ArqYnYl4tbzm3WlDmoUXpIN48Avkl5SOrWmfALPfn01PCUjcAD7t2n/C8TkgA+KjY7we31e8L6+8nkUo3tAz7OzNc/hdb2LFA5jmOJBc4mla5dap+BUbej+jNAdwJpuJJoPCijm3hIABiIaNzaDwNMjzVhvm1WeaKKzWRkzcFXSSPeMMjnBuJ0mXWApQONBTcKq88YvXeq9YIekfU5AdYncAM6nkPhzUp9aV0FBo0b6DJvetS0SNjZ0bDWvnO9Y8B933+C8XbBU4zoNO1bc2/JZRJga4mvsqddVnhs4iGECnHiV6dI2MxjDjlc0PoXYGsa4VaK1zNKL453KnKuKmeld6JKyArIHUBPJa4K9Suo0orXecPRv9V7D3FzifZGV0nyINL7ZQDKKFxcdwJwNAPbicfwlUK8LKRZ7OKEvlmOFrQS52BjGgNAzJL5SAO1d68k2x7rtsrnTAC0Wgh8o1wAV6OKu/CCSebjrSqJF5RERRERAREQEREBERAVG2v8nkdqLprOWxSuzc0isMh4uAzY77wrvqCVeUQfmTaDZwWWUx2mztY8AGooWFprRwcMqGh1zyUT9Csnqt8Qu/+UPZJ1ua2SKnSsFKE0xtrUCp0IJNK5dYqp2O63xxRRzRFj2MDCHAZ4OpiBGRBw1y4qMd9fGa5X9W2U7vByfU9l4H8xXVXXfGfQb+ULE66YTrFH+VvyTWPzT6cu+pLNwd+Y/JfPqGz/e8f0XTnXHZz/Ii/I35LwdnrN9hF+RvyTT8sczOz8HF3ivP+HoPWcum/wCHbN9hH+UL4dnLN9i3wTT8scy+qIWaNLu0/LP2rWtmlCQ1uuEZCvPieZquqjZuzfZN76n4qh7VXaILQ4MYGsydkANRQ9uYTWuf9J1cVtlkDqOOm7n+i3mDQBeYnEtFRSlRnrSpUns7Yo5rRHHLI2NjvTe7CwEEUxO3DfzpTeq6NFsAc1zjSrTTPPQbj2DTkvFV0XbiK6bLZegs8otFocRR0Za6NlCC5ziwUGVQG1JzzyqucIkZGlJc8LeJXxgW3c9mM1pYwcQPE0+aK755NrghZZoJ3RtMoacDyKua12Zw180neRmaK7LUumz9FDGylKNHjSpW2iT0IiIoiIgIiICIiAiIgIiICg9qbB0keMDrR1Pa3f8APuU4vhROpsxzCiUUltVczonBzCRGTXLcaGrTTxHYoAOro8nvWXjvNnhtlfFqFzvWXgzO4qDdSqj3WojXF4AoLXX0vYhiRBWJ9nY9wLmg5EVIFc9aHdVaotB3OC9tmO+nIhBza+7H0MjwfRJBPZv7xQ961rNd75QxwFAXauOEEDgN/arxtZdgnYZWjrAUeOQ9Lu93YqvZ9pbZZYy1kwjOlWxxF5bkAGyFmIClNCFp6uevlPCLvCHBI5pFCNQPZpyotUlYpLSXEkkkkkkk1JJzJJOZPNY+mVbbWOgqrx5H7n6a0teRk3M/vsqufwtMjg0d6/RnkruL6NZ8ZFHO8efw78SM9fS8hfURGhERAREQEREBERAREQEREBF8JWKSWiD7aYWyNLHirTkQVzPaXZr6O8ytGJh9IDMcMXA89Cr3abYQoK33k+hRnrmdOeG2RmoDjlrUEe8LC62AHJwWe/msJJY3C4+qMvAqrWgyjn3UWccvx1JTFhNa0OuS+fWLMusSRvrme3PNVqe0SD0D4LRktb/s3eCYvwXgXmw71kbeDdzqd6oAvCT1HeCyx3jJ6rvylMPxui2e9KZ17eahb+udkoL4xUa4Rq07yzly/Yr0N4O9V3gVKWS8X7gfAqk5vN8K3Ndzx5vWHLI94P6r5Fd0rj5tOZorqOjl8+PPiAQfEa96lLsuuHEKMrzfiLR3H5FNb+f8YPJ7siZJGOIrnlUa03/6Rrz0XfbJCI2NY3Rop+qrezsccLeqcTjq74DgFYYpaosl91sovLSvSrQiIgIiICIiAiIgIiICIiDyQsT41nXyiCOms1VFWy7sSshYvnQhBSZdnwdy1X7LtPohX42cJ9Gag527ZJnqheP8Gxn0Quj/AEZqfR2oOdN2Ji9UeCzN2Li9UeC6AIAvvQhBRGbGxeqPBZm7Ix+qPBXbowvuAIKczZWMeiFsx7PMHoq0YAmAIIayXaGHLRSsUQCy0X1B8AX1EQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/2Q==";

  return (
    <div className='d-flex justify-content-evenly align-items-center'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
            <Card.Title>Laptop</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <NavLink to="/products/1">
                <Button variant="primary">Product Details</Button>
            </NavLink>
        </Card.Body>
        </Card>

            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
            <Card.Title>SmartPhone</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <NavLink to="/products/2">
                <Button variant="primary">Product Details</Button>
            </NavLink>
        </Card.Body>
        </Card>

            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
            <Card.Title>Headphone</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <NavLink to="/products/3">
                <Button variant="primary">Product Details</Button>
            </NavLink>        
        </Card.Body>
        </Card>

            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img4} />
        <Card.Body>
            <Card.Title>Smart Watch</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <NavLink to="/products/4">
                <Button variant="primary">Product Details</Button>
            </NavLink>
        </Card.Body>
        </Card>
    </div>
  );
}

export default Shopping;