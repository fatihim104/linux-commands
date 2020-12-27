1- sudo apt update          // mevcut paket ve uygulamalarin listesini günceller.Kurma ya da yükseltme yapmaz. 
                            //upgradeden önce yapilir.

2- sudo apt upgrade         // listelenen uygulama/paketlerden güncelleme gerekenleri günceller.

3- sudo snap install --classic code         //visual studio programini kurar.

4- wget https:/dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb    //chromu icin 
                                                                                    //kurmak wget    indirme komutu. https: den sonra 2 slash olacak. (zorinde bu yöntemle indirdi.)
    sudo dpkg -i google-chrome-stable_current_amd64.deb                         // chromu kurma komutu. (zorin)
    google-chrome                                                                // Terminalden google 
                                                                                    //calistima komutu.

5- sudo snap install libreoffice                            // LibreOffice 7.0 programini snap packager ile 
                                                             //kurulumu.

6-  sudo adduser guest               // guest adinda yeni kullancici olusturuldu.
    sudo addgroup newteam            // newteam adinda yeni grup olusturuldu.

7-  vim index.html                   // vim editörü ile index.html adinda dosya olusturma.

8-  nano app.js                      // nano editörü ile app.js adinda dosya olusturma. 

9- sudo chown guest:newteam index.html    // index.html dosyasinin sahibini guest kullancisi ve newteam grubu 
                                            // degistirdik.

10- sudo chmod ug=rwx app.js                //app.js dosyasinda kullaniciya ve grupa yazma okuma ve calistirma
                                            // yetkisi verdik.

11- ls -l                                 // dosyalarin detayli listesini listeledik ve kullanicilari 
                                        // ve yetkileri kontrol ettik.

12- alias => $ alias cls=clear          // kisayol olustuma komutu.
    df => $ df                           // disk free, diskin ne kadari bos oldugunu gösterir.
    history => $ history                  // yazdigimiz (o ana kadar) terminal komutlarinin listesini dökümler.
    date =>  $ date                     // severin saatini ayarlamak veya görüntülemek icin kullanilir. 
    grep =>  $ grep fatih dosya.js      // arama komutudur. fatih kelimesini dosya.js dosyasinda arar.
    ps => $ ps                          // calisan programlari listeler.
    kill => $ kill -pid number         // ps _ef komutu ile listelenen calisan programlardan istedigimizi 
                                        // pid    (process    id number) numarasini girerek sonlandirabiliz.
    tar => $ tar -czvf arsivlenmis.tar.gz ./arsiv/  // arsivleme komutudur. 4 parametresi vardir. 
                                                    // c: arsiv olustur
                                                    // z: ziple
                                                    // v: detaylari göster
                                                    // f: arsivimize isim verebiliriz.
                                                    // arsiv klasörü arsivlenmis isminde arsiv zip dosyasi adinda yeni bir isimle ziplendi.
            $ tar -xvf arsivlenmis.tar.gz            // ziplenmis dosyasi extrat acma komutu.
    top => $ top                                    // kaynak kullanimini listeler. cikmak icin Q ya basilir. 
    du  => $ du                                      // bulunulan klasördeki dosyalarin kapladigi (disk usage)
                                                    // alani kullanir. 
    head => $ head dosya.html                      // belirtilen dosyanin ilk 10 satirini getirir.
    tail => $ tail dosya.html                      // belirtilen dosyanin son 10 satirini getirir.
    wget => $ wget                                 // internetten dosya indirme komutudur. bu komuttan sonra 
                                                    // indirilecek dosyanin adresi yazilir. 
    find => $ find -name index.html                 // dosya aramak, dosya boyutlarını listelemek 
                                                    // farklı islevler için kullanılmaktadır. 
                                                    //örnekde ismi index.html olan dosyalari arar.