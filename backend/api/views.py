from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ExpenseDataSerializer, TotalExpenseDataSerializer
from .models import ExpenseData, TotalExpenseData
# Create your views here.

#View Data
class ExpenseView(APIView):
    def get(self, request):
        queryset = ExpenseData.objects.all()
        serializer = ExpenseDataSerializer(queryset, many=True)
        return Response(serializer.data)

#Post Data  
class ExpensePost(generics.ListCreateAPIView):
        queryset = ExpenseData.objects.all()
        serializer_class = ExpenseDataSerializer

#Delete Data
class ExpenseDel(APIView):
    def get(self, request, id):
        try:
            queryset = ExpenseData.objects.get(id=id)
            queryset.delete()
            return Response({"Message": "Deleted Successfully"}, status=status.HTTP_200_OK)
        except:
            return Response({"Bad Request":"Id not found!!"}, status=status.HTTP_400_BAD_REQUEST)

#View Total 
class TotalExpenseView(APIView):
    def get(self, request):
        queryset = TotalExpenseData.objects.all()
        serializer = TotalExpenseDataSerializer(queryset, many=True)
        return Response(serializer.data)

#Update Total
class TotalExpenseUpdate(APIView):
    def get(self, request):

        totalExpense = 0
        ExpenseQueryset = ExpenseData.objects.values('transaction', 'amt')
        for data in ExpenseQueryset:
            if data['transaction'] == "Expense":
               totalExpense = totalExpense - data['amt']
            else:
                totalExpense = totalExpense + data['amt']

        queryset = TotalExpenseData.objects.get(id=1)
        queryset.total = totalExpense
        queryset.save()
        return Response({"Message": "Successfully"}, status=status.HTTP_200_OK)
    
class TotalExpensePost(generics.ListCreateAPIView):
    queryset = TotalExpenseData.objects.all()
    serializer_class = TotalExpenseDataSerializer