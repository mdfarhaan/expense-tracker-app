from django.urls import path
from . import views

urlpatterns = [
    path('view/', views.ExpenseView.as_view()),
    path('post/', views.ExpensePost.as_view()),
    path('del/<int:id>', views.ExpenseDel.as_view()),

    path('total/', views.TotalExpenseView.as_view()),
    path('totalupdate/', views.TotalExpenseUpdate.as_view()),
    path('totalpost/', views.TotalExpensePost.as_view()),

]
