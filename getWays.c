#include <stdio.h>  

int n = 0;

void swap(int *a, int *b){
  int m;
  m = *a;
  *a = *b;
  *b = m; 
}

void perm(int list[], int k, int m){
  int i;
  if(k > m){
    for(i = 0; i <= m; i++){
      printf("%d ", list[i]);
    }
    printf("\n");
    n++;
  }else{
    for(i = k; i <= m; i++){
      swap(&list[k], &list[i]);
      perm(list, k + 1, m);
      swap(&list[k], &list[i]);
    }
  }
}

int main(){
  int list[] = {1, 2, 3, 4, 5};
  perm(list, 0, 4);
  printf("total:%d\n", n);
  return 0; 
}

/*
  list: { 1 2 3 4 5 } k:0 m:4 i:0 n:0
  list: { 5 2 3 4 1 } k:1 m:4 i:1 n:0
  list: { 5 1 3 4 2 } k:2 m:4 i:2 n:0
  list: { 5 1 2 4 3 } k:3 m:4 i:3 n:0
  list: { 5 1 2 3 4 } k:4 m:4 i:4 n:0

  list: { 5 1 2 3 4 } k:5 m:4 i:0-4 n:0 print:5 1 2 3 4

  list: { 4 1 2 3 5 } k:0 m:4 i:4 n:1 print:1
*/
