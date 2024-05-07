#include <iostream> //direttiva preProcessore(riga di import <input output stream(flusso entrata uscita)>)
#include <string>
using namespace std;
using std::string;
int main() //è un Blocco dove main è il nome della funzione, main = funzione principale o entryPoint, è int perchè è un tipo di dato ed indica il ritorno e deve restituire un intero.
{ //le graffe indicano il blocco e all interno delle parentesi c'è il codice da eseguire.
   int eta = 15;
   int eta1 = 29;
  string nome = "Saverio";
   cout << "Ciao ho "; cin >> eta; cout<< " anni" ; //Nuova riga ovvero manda a capo durante la stampa.
   cout << "Ciao anche io ho " <<eta1<< " anni " << endl;
   //standard :: cout(manda in console in pratica è la stampa a video console out), <<(operatore che indica che in console si deve inserire questa "roba" imparare a leggere da destra)
  
   return 0;  //ritornaere, mandare fuori qualcosa.
 //CTRL + ù commento riga multipla.  
}

/*
  la variabile è una scatola che contiene un valore,  
*/
